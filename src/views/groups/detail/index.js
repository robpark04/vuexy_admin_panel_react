// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
// ** Icons Imports
import { List } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'

// ** Utils
// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

import axios from 'axios'
// ** Custom Hooks
// ** Demo Components
import InvoiceList from '@src/views/apps/invoice/list'
import Sales from '@src/views/ui-elements/cards/analytics/Sales'
import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import Breadcrumbs from '@components/breadcrumbs'
import Organization from './organization'
import DailyOperation from './dailyoperation'
import Setup from './setup'
import ResourceLink from './resourcelink'
// ** Images
//import jsonImg from '@src/assets/images/icons/json.png'
//import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const DetailOrganiation = () => {
  // ** Context
  const { id } = useParams()
 // const { colors } = useContext(ThemeColors)
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get(`/api/groups/detail/${id}`).then(response => setData(response.data))
  }, [])

  return (
    <div id='dashboard-analytics'>
      <Breadcrumbs breadCrumbTitle='GROUP - QC PORT OF CORPUS CHRISTI' breadCrumbParent='Groups' breadCrumbActive='Groups details' />
      <Row className='match-height'>
         <Col xl={5} md={5} sm={12}>
            {data !== null ? (
               <Organization data={data} />
            ) : null}
        </Col>
        <Col xl={7} md={7} sm={12}>
            <DailyOperation />
        </Col>
      </Row>
      <Row className='match-height'>
         <Col xl={5} md={5} sm={12}>
            <Setup/>
        </Col>
        <Col xl={7} md={7} sm={12}>
            <ResourceLink />
        </Col>
      </Row>
    </div>
  )
}

export default DetailOrganiation
