import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AsyncComponent from './async-component';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
// import Single_video from './components/video_gallery/single_video';

const MyOgComponent    = AsyncComponent(() => {
    return import('./layout/layout_1');
});
const Images    = AsyncComponent(() => {
    return import('./layout/images');
});
const Videos    = AsyncComponent(() => {
    return import('./layout/video');
});
const Image_galary    = AsyncComponent(() => {
    return import('./layout/image_galary');
});
const Video_gallery   = AsyncComponent(() => {
    return import('./layout/video_galary');
});
const Buttons    = AsyncComponent(() => {
    return import('./layout/buttons');
});
const Video_modal    = AsyncComponent(() => {
    return import('./layout/video_modal');
});

const Login    = AsyncComponent(() => {
    return import('./layout/login');
});
const Comment_page    = AsyncComponent(() => {
    return import('./layout/comment_page');
});
const Vcard_1    = AsyncComponent(() => {
    return import('./layout/vcard_1');
});
const Vcard_2    = AsyncComponent(() => {
    return import('./layout/vcard_2');
});
const Vcard_3    = AsyncComponent(() => {
    return import('./layout/vcard_3');
});
const Invitation   = AsyncComponent(() => {
    return import('./layout/invitation');
});
// const Layout_10   = AsyncComponent(() => {
//     return import('./layout/layout_10');
// });
const Menu_1   = AsyncComponent(() => {
    return import('./layout/menu_1');
});
// const Menu_2   = AsyncComponent(() => {
//     return import('./components/menu_types/menu_2');
// });
const Menu_3   = AsyncComponent(() => {
    return import('./layout/menu_3');
});
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
        <Route path="/layout_1" component={MyOgComponent} />
        <Route path="/images" component={Images} />
        <Route path="/image_galary" component={Image_galary} />
        <Route path="/videos" component={Videos} />
        <Route path="/video_galary" component={Video_gallery} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/video_modal" component={Video_modal} />
        <Route path="/login" component={Login} />
        <Route path="/behance" component={Comment_page} />
        <Route path="/vcard_1" component={Vcard_1} />
        <Route path="/vcard_2" component={Vcard_2} />
        <Route path="/vcard_3" component={Vcard_3} />
        <Route path="/invitation" component={Invitation} />
        <Route path="/menu_3" component={Menu_3} />
        <Route path="/menu_1" component={Menu_1} />
        
        
    </Switch>
 </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
