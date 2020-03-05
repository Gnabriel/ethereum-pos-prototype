import React, { Component, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import {Card, CardBody, CardTitle, Pagination, PaginationItem, PaginationLink, Row} from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import IconCardsCarousel from '../../../containers/dashboards/IconCardsCarousel';
import RecentOrders from '../../../containers/dashboards/RecentOrders';
import Logs from '../../../containers/dashboards/Logs';
import Tickets from '../../../containers/dashboards/Tickets';
import Calendar from '../../../containers/dashboards/Calendar';
import BestSellers from '../../../containers/dashboards/BestSellers';
import ProfileStatuses from '../../../containers/dashboards/ProfileStatuses';
import GradientCardContainer from '../../../containers/dashboards/GradientCardContainer';
import Cakes from '../../../containers/dashboards/Cakes';
import GradientWithRadialProgressCard from '../../../components/cards/GradientWithRadialProgressCard';
import SortableStaticticsRow from '../../../containers/dashboards/SortableStaticticsRow';
import AdvancedSearch from '../../../containers/dashboards/AdvancedSearch';
import SmallLineCharts from '../../../containers/dashboards/SmallLineCharts';
import SalesChartCard from '../../../containers/dashboards/SalesChartCard';
import ProductCategoriesPolarArea from '../../../containers/dashboards/ProductCategoriesPolarArea';
import WebsiteVisitsChartCard from '../../../containers/dashboards/WebsiteVisitsChartCard';
import ConversionRatesChartCard from '../../../containers/dashboards/ConversionRatesChartCard';
import TopRatedItems from '../../../containers/dashboards/TopRatedItems';
import Basic from "../../../containers/wizard/Basic";
import IntlMessages from "../../../helpers/IntlMessages";

class DefaultDashboard extends Component {
  render() {
    const { messages } = this.props.intl;
    return (
      <Fragment>
          <Row>
              <Colxx xxs="12">
                  <Pagination
                      size="sm"
                      aria-label="Page navigation example"
                      listClassName="justify-content-center"
                  >
                      <PaginationItem>
                          <PaginationLink className="prev" href="#">
                              <i className="simple-icon-arrow-left" />
                          </PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                          <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                          <PaginationLink className="next" href="#">
                              <i className="simple-icon-arrow-right" />
                          </PaginationLink>
                      </PaginationItem>
                  </Pagination>
              </Colxx>
          </Row>
        <Row>
          <Colxx xxs="12">
            <h2>
              Generate key pairs
            </h2>
              <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Row>
          <Colxx lg="12" xl="6">
            <IconCardsCarousel />
            <Row>
              <Colxx md="12" className="mb-4">
                <SalesChartCard />
              </Colxx>
            </Row>
          </Colxx>
          <Colxx lg="12" xl="6" className="mb-4">
            <RecentOrders />
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
export default injectIntl(DefaultDashboard);
