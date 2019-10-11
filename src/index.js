import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AsyncComponent from './async-component';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
// import Single_video from './components/video_gallery/single_video';

const Layout_1    = AsyncComponent(() => {
    return import('./layout/layout_1');
});
// const Layout_2    = AsyncComponent(() => {
//     return import('./layout/layout_2');
// });
// const Layout_3    = AsyncComponent(() => {
//     return import('./layout/layout_3');
// });
// const Layout_4    = AsyncComponent(() => {
//     return import('./layout/layout_4');
// });
// const Layout_5    = AsyncComponent(() => {
//     return import('./layout/layout_5');
// });
// const Layout_6    = AsyncComponent(() => {
//     return import('./layout/layout_6');
// });
// const Layout_6_1    = AsyncComponent(() => {
//     return import('./layout/layout_6_1');
// });

// const Layout_7    = AsyncComponent(() => {
//     return import('./layout/layout_7');
// });
// const Layout_7_1    = AsyncComponent(() => {
//     return import('./layout/layout_7_1');
// });
// const Layout_8    = AsyncComponent(() => {
//     return import('./layout/layout_8');
// });
// const Layout_9   = AsyncComponent(() => {
//     return import('./layout/layout_9');
// });
// const Layout_10   = AsyncComponent(() => {
//     return import('./layout/layout_10');
// });
// const Menu_1   = AsyncComponent(() => {
//     return import('./components/menu_types/menu_1');
// });
// const Menu_2   = AsyncComponent(() => {
//     return import('./components/menu_types/menu_2');
// });
// const Menu_3   = AsyncComponent(() => {
//     return import('./components/menu_types/menu_3');
// });
// const Menu_4   = AsyncComponent(() => {
//     return import('./components/menu_types/menu_4');
// });
// const Menu_5   = AsyncComponent(() => {
//     return import('./components/menu_types/menu_5');
// });
// const Menu_6   = AsyncComponent(() => {
//     return import('./components/menu_types/menu_6');
// });
// const Menu_7   = AsyncComponent(() => {
//     return import('./components/menu_types/menu_7');
// });
// const Text_alignment   = AsyncComponent(() => {
//     return import('./components/text');
// });
// const Small_circle   = AsyncComponent(() => {
//     return import('./components/image_types/small _circular');
// });
// const Big_circle   = AsyncComponent(() => {
//     return import('./components/image_types/big_circular');
// });
// const SoftCorner_square   = AsyncComponent(() => {
//     return import('./components/image_types/softCorner_square');
// });
// const  Vertical_image  = AsyncComponent(() => {
//     return import('./components/image_types/vertical_image');
// });
// const Rectangular_image  = AsyncComponent(() => {
//     return import('./components/image_types/rectangular_image');
// });
// const Square_image  = AsyncComponent(() => {
//     return import('./components/image_types/square_image');
// });
// const Carousel_image = AsyncComponent(() => {
//     return import('./components/image_gallery/carousel');
// });
// const Two_one_two = AsyncComponent(() => {
//     return import('./components/image_gallery/two_one_two');
// });
// const Single_video = AsyncComponent(() => {
//     return import('./components/video_gallery/single_video');
// });
// const Carousel_video = AsyncComponent(() => {
//     return import('./components/video_gallery/carousel_video');
// });
// const Grid_video = AsyncComponent(() => {
//     return import('./components/video_gallery/grid_video');
// });
// const Social_buttons   = AsyncComponent(() => {
//     return import('./components/social_buttons');
// });
// const Buttons   = AsyncComponent(() => {
//     return import('./components/buttons');
// });
// const Video_stretched   = AsyncComponent(() => {
//     return import('./components/video/stretched_video');
// });
// const Video_rectangular   = AsyncComponent(() => {
//     return import('./components/video/rectangular_video');
// });


ReactDOM.render(<Router >  
    <Switch>
        {/* <Route path="" component={Layout_5} /> */}
        <Route path="" component={Layout_1} />
        
    </Switch>
 </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
