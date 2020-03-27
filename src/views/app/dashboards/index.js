import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const GenerateDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-generate" */ './generate')
);
const ContentDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-content" */ './content')
);
const AnalyticsDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-analytics" */ './analytics')
);
const EcommerceDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ './ecommerce')
);
const SummaryDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-summary" */ './summary')
);
const UploadDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-upload" */ './upload')
);
const ConnectDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-connect" */ './connect')
);
const OverviewDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-overview" */ './overview')
);
const SuccessDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-success" */ './success')
);



// NO FRICTION
const NFGenerateDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-nf-generate" */ './nf/generate')
);
const NFSummaryDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-nf-summary" */ './nf/summary')
);
const NFUploadDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-nf-upload" */ './nf/upload')
);
const NFConnectDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-nf-connect" */ './nf/connect')
);
const NFOverviewDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-nf-overview" */ './nf/overview')
);
const NFSuccessDefault = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-nf-success" */ './nf/success')
);




const Dashboards = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/generate`} />
      <Route
        path={`${match.url}/generate`}
        render={props => <GenerateDefault {...props} />}
      />
      <Route
        path={`${match.url}/content`}
        render={props => <ContentDefault {...props} />}
      />
      <Route
        path={`${match.url}/ecommerce`}
        render={props => <EcommerceDefault {...props} />}
      />
      <Route
        path={`${match.url}/analytics`}
        render={props => <AnalyticsDefault {...props} />}
      />
      <Route
          path={`${match.url}/summary`}
          render={props => <SummaryDefault {...props} />}
      />
      <Route
          path={`${match.url}/upload`}
          render={props => <UploadDefault {...props} />}
      />
      <Route
          path={`${match.url}/connect`}
          render={props => <ConnectDefault {...props} />}
      />
      <Route
          path={`${match.url}/overview`}
          render={props => <OverviewDefault {...props} />}
      />
      <Route
          path={`${match.url}/success`}
          render={props => <SuccessDefault {...props} />}
      />



      {/* NO FRICTION */}
      <Route
          path={`${match.url}/nf/generate`}
          render={props => <NFGenerateDefault {...props} />}
      />
      <Route
          path={`${match.url}/nf/summary`}
          render={props => <NFSummaryDefault {...props} />}
      />
      <Route
          path={`${match.url}/nf/upload`}
          render={props => <NFUploadDefault {...props} />}
      />
      <Route
          path={`${match.url}/nf/connect`}
          render={props => <NFConnectDefault {...props} />}
      />
      <Route
          path={`${match.url}/nf/overview`}
          render={props => <NFOverviewDefault {...props} />}
      />
      <Route
          path={`${match.url}/nf/success`}
          render={props => <NFSuccessDefault {...props} />}
      />

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Dashboards;
