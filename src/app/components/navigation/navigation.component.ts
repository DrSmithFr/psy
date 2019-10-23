import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResolveStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component(
    {
        selector:    'app-navigation',
        templateUrl: './navigation.component.html',
        styleUrls:   ['./navigation.component.scss']
    }
)
export class NavigationComponent implements OnInit {

    @Output() opening           = new EventEmitter<true>();
    public currentImage: string = null;

    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
        this.router.events.pipe(
            filter(event => event instanceof ResolveStart),
            map((event: ResolveStart) => {
                let data = null;

                let route = event.state.root;

                while (route) {
                    data  = route.data || data;
                    route = route.firstChild;
                }

                return data;
            }),
        ).subscribe((data: { img: string }) => {
            this.currentImage = data.img;
        });
    }

    onMenuClick() {
        this.opening.emit(true);
    }

}
