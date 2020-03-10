import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {WaterMaterial} from '@babylonjs/materials/water';
import {
  ArcRotateCamera,
  Camera,
  Color3,
  Color4,
  CubeTexture,
  Engine,
  FresnelParameters,
  HemisphericLight,
  Mesh,
  ParticleSystem,
  Scene,
  StandardMaterial,
  Texture,
  Vector2,
  Vector3
} from '@babylonjs/core';

@Component(
  {
    selector:    'app-breath',
    templateUrl: './breath.component.html',
    styleUrls:   ['./breath.component.scss']
  }
)
export class BreathComponent implements AfterViewInit {

  engine: Engine = null;
  scene: Scene   = null;
  camera: Camera = null;

  lastTime;

  @ViewChild('canvas', {static: true}) canvas: ElementRef<HTMLCanvasElement>;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.engine = new Engine(this.canvas.nativeElement, true);
    this.scene  = new Scene(this.engine);

    this.camera = new ArcRotateCamera(
      'camera',
      3 * Math.PI / 2,
      Math.PI / 2.5, 50,
      Vector3.Zero(),
      this.scene
    );

    this.camera.attachControl(this.canvas.nativeElement);

    this.createScene(this.scene);

    // running babylonJS
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  createScene(scene: Scene) {
    // Light
    const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);

    // Skybox
    const skybox         = Mesh.CreateBox('skyBox', 5000.0, scene);
    const skyboxMaterial = new StandardMaterial('skyBox', scene);

    skyboxMaterial.backFaceCulling   = false;
    skyboxMaterial.reflectionTexture = new CubeTexture('assets/texture/TropicalSunnyDay', scene);

    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;

    skyboxMaterial.diffuseColor    = new Color3(0, 0, 0);
    skyboxMaterial.specularColor   = new Color3(0, 0, 0);
    skyboxMaterial.disableLighting = true;
    skybox.material                = skyboxMaterial;

    // Water material
    const waterMaterial            = new WaterMaterial('waterMaterial', scene, new Vector2(512, 512));
    waterMaterial.bumpTexture      = new Texture('/assets/texture/waterbump.png', scene);
    waterMaterial.windForce        = -10;
    waterMaterial.waveHeight       = 0.8;
    waterMaterial.bumpHeight       = 0.1;
    waterMaterial.waveLength       = 0.1;
    waterMaterial.waveSpeed        = 50.0;
    waterMaterial.colorBlendFactor = 2;
    waterMaterial.windDirection    = new Vector2(1, 1);
    waterMaterial.colorBlendFactor = 0;

    // Ground
    const groundTexture  = new Texture('/assets/texture/sand.jpg', scene);
    groundTexture.vScale = groundTexture.uScale = 4.0;

    const groundMaterial          = new StandardMaterial('groundMaterial', scene);
    groundMaterial.diffuseTexture = groundTexture;

    const ground      = Mesh.CreateGround('ground', 512, 512, 32, scene, false);
    ground.position.y = -1;
    ground.material   = groundMaterial;

    // Water mesh
    const waterMesh    = Mesh.CreateGround('waterMesh', 512, 512, 32, scene, false);
    waterMesh.material = waterMaterial;

    // Sphere
    const sphereMaterial = new StandardMaterial('sphereMaterial', scene);

    // Sphere1 material
    sphereMaterial.refractionTexture = new CubeTexture('/assets/texture/TropicalSunnyDay', scene);
    sphereMaterial.reflectionTexture = new CubeTexture('/assets/texture/TropicalSunnyDay', scene);
    sphereMaterial.diffuseColor      = new Color3(0, 0, 0);
    sphereMaterial.invertRefractionY = false;
    sphereMaterial.indexOfRefraction = 0.98;
    sphereMaterial.specularPower     = 128;

    sphereMaterial.refractionFresnelParameters            = new FresnelParameters();
    sphereMaterial.refractionFresnelParameters.power      = 2;
    sphereMaterial.reflectionFresnelParameters            = new FresnelParameters();
    sphereMaterial.reflectionFresnelParameters.power      = 2;
    sphereMaterial.reflectionFresnelParameters.leftColor  = Color3.Black();
    sphereMaterial.reflectionFresnelParameters.rightColor = Color3.White();

    const sphere      = Mesh.CreateSphere('sphere', 16, 10, scene);
    sphere.position.y = 5;
    sphere.material   = sphereMaterial;

    // Configure water material
    waterMaterial.addToRenderList(ground);
    waterMaterial.addToRenderList(skybox);
    waterMaterial.addToRenderList(sphere);

    ////////// RAY CAST TO FIND WATER HEIGHT ////////////
    const angle = 0;
    const i     = 0;

    scene.registerBeforeRender(() => {
      // @ts-ignore steal readable
      const time = waterMaterial._lastTime / 100000;
      const x    = sphere.position.x;
      const z    = sphere.position.z;

      const height = Math.abs(
        Math.sin(((x) + time * waterMaterial.waveSpeed)) * waterMaterial.waveHeight * waterMaterial.windDirection.x * 5.0
        + Math.cos(((z) + time * waterMaterial.waveSpeed)) * waterMaterial.waveHeight * waterMaterial.windDirection.y * 5.0
      );

      const scale = 0.5 + height / 4;

      sphere.position.y = height;
      sphere.scaling = new Vector3(scale, scale, scale);
    });
  }

}
