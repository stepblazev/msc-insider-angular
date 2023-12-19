import {
  state,
  style,
  animate,
  transition,
  AnimationMetadata,
} from '@angular/animations';

export const fullscreenAnimation: AnimationMetadata[] = [
  state(
    'false',
    style({
      opacity: 1,
      position: 'static',
      width: '100%',
      heght: 'auto',
    })
  ),
  state(
    'true',
    style({
      opacity: 1,
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: 100,
      borderRadius: 0,
    })
  ),
  transition('false => true', [
    animate('0.3s ease', style({ opacity: 0, transform: 'scale(0.8)' })),
    style({
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: 100,
      borderRadius: 0,
    }),
    animate('0.3s 100ms ease', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
  transition('true => false', [
    animate('0.3s ease', style({ opacity: 0, transform: 'scale(0.8)' })),
    style({ position: 'static', width: '100%', heght: 'auto' }),
    animate('0.3s 100ms ease', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
];
