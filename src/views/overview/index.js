// ** React Imports
import { useState, useEffect } from 'react'

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
import DailyRate from './DailyRate'
import DailyTest from './DailyTest'
import CaseReport from './CaseReport'
import RecentExport from './RecentExport'
import Vaccination from './Vaccination'
import Admins from './Admins'
import DetailedReport from './DetailedReport'
import RecentCheck from './RecentCheck'
import Groups from './Groups'
import axios from 'axios'
// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'
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
// ** Images
//import jsonImg from '@src/assets/images/icons/json.png'
//import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const Overview = () => {
  // ** Context
 // const { colors } = useContext(ThemeColors)
  const [isRtl] = useRTL()
  const name = "Erik"
  const [data, setData] = useState(null)
  useEffect(() => {
    axios.get('/overview/chartdata').then(response => setData(response.data))
  }, [])

  return (
    <div id='dashboard-analytics'>
      
      <div style = {{fontSize:"26px", color:"#09477D", fontWeight:"bold"}}>
        Welcome, Dr.{name}
      </div>
      <div style = {{height:"50px"}}>
      Get summary of your daily participants check ins here
      </div>
      <br/>
      {data !== null ? (
        <>
      <Row className='match-height'>
          <Col lg='6' sm='12'>
            <DailyRate data = {data.chartdata} direction={isRtl ? 'rtl' : 'ltr'} />
          </Col>
          <Col lg='3' sm='6'>
            <CaseReport />
          </Col>
          <Col lg='3' sm='6'>
            <RecentExport />
          </Col>
        </Row>
        <Row className='match-height'>
          <Col lg='6' xs='12'>
            <Vaccination />
          </Col>
          <Col lg='6' xs='12'>
            <Admins />
          </Col>
        </Row>
      
        <Row className='match-height'>
          <Col lg='6' xs='12'>
            <DailyTest pdata = {data.testvolume} direction={isRtl ? 'rtl' : 'ltr'}/>
          </Col>
          <Col lg='6' xs='12'>
            <DetailedReport></DetailedReport>
          </Col>
        </Row>
        <Row className='match-height'>
          <Col lg='6' xs='12'>
            <RecentCheck />
          </Col>
          <Col lg='6' xs='12'>
            <Groups/>
          </Col>
        </Row>
        </>
        ) : null}
    </div>
  )
}

export default Overview
