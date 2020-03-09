import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { WaterMaterial } from '@babylonjs/materials/water';
import {
  ArcRotateCamera,
  Camera, Color3, CubeTexture,
  Engine,
  HemisphericLight,
  Mesh,
  Scene,
  StandardMaterial, Texture, Vector2,
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
      -Math.PI / 2,
      Math.PI / 4,
      5,
      Vector3.Zero(),
      this.scene
    );

    this.camera.attachControl(this.canvas.nativeElement, true);

    this.createScene(this.scene);
  }

  createScene(scene: Scene) {
    // Light
    const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);

    // Skybox
    const skybox                                     = Mesh.CreateBox('skyBox', 5000.0, scene);
    const skyboxMaterial                             = new StandardMaterial('skyBox', scene);
    skyboxMaterial.backFaceCulling                   = false;
    skyboxMaterial.reflectionTexture                 = new CubeTexture('//www.babylonjs.com/assets/skybox/TropicalSunnyDay', scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor                      = new Color3(0, 0, 0);
    skyboxMaterial.specularColor                     = new Color3(0, 0, 0);
    skyboxMaterial.disableLighting                   = true;
    skybox.material                                  = skyboxMaterial;

    // Water material
    const waterMaterial            = new WaterMaterial('waterMaterial', scene, new Vector2(512, 512));
    waterMaterial.bumpTexture      = new Texture('//www.babylonjs.com/assets/waterbump.png', scene);
    waterMaterial.windForce        = -10;
    waterMaterial.waveHeight       = 0.5;
    waterMaterial.bumpHeight       = 0.1;
    waterMaterial.waveLength       = 0.1;
    waterMaterial.waveSpeed        = 50.0;
    waterMaterial.colorBlendFactor = 0;
    waterMaterial.windDirection    = new Vector2(1, 1);
    waterMaterial.colorBlendFactor = 0;

    // Ground
    const groundTexture  = new Texture('//www.babylonjs.com/assets/sand.jpg', scene);
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
    const sphereMaterial          = new StandardMaterial('sphereMaterial', scene);
    sphereMaterial.diffuseTexture = new Texture('//www.babylonjs.com/assets/wood.jpg', scene);

    const sphere      = Mesh.CreateSphere('sphere', 16, 10, scene);
    sphere.position.y = 20;
    sphere.material   = sphereMaterial;

    // Configure water material
    waterMaterial.addToRenderList(ground);
    waterMaterial.addToRenderList(skybox);
    waterMaterial.addToRenderList(sphere);

    ////////// RAY CAST TO FIND WATER HEIGHT ////////////
    const angle = 0;
    const i = 0;
    scene.registerBeforeRender(() => {
      const time        = this.lastTime / 100000;
      const x           = sphere.position.x;
      const z           = sphere.position.z;
      sphere.position.y = Math.abs(
        (Math.sin(((x / 0.05) + time * waterMaterial.waveSpeed)) * waterMaterial.waveHeight * waterMaterial.windDirection.x * 5.0) + (Math.cos(((z / 0.05) + time * waterMaterial.waveSpeed)) * waterMaterial.waveHeight * waterMaterial.windDirection.y * 5.0));

    });
  }

}
