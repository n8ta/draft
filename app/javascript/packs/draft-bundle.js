import ReactOnRails from 'react-on-rails';

import Login from '../bundles/Draft/components/Login';
import Draft from '../bundles/Draft/components/Draft';
import ShowDraft from '../bundles/Draft/components/ShowDraft';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
    Draft, Login, ShowDraft
});
