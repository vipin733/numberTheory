import React from 'react'
import { connect } from 'react-redux'
import chart from '../../utils/chart'
class Index extends React.Component {

  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    let chartData = this.props.dashboardData
    if (chartData.speedChartData) {
      chart.initChartsPages(chartData)
    }
  }

  componentDidUpdate(){
    let chartData = this.props.dashboardData
    chart.initChartsPages(chartData)
  }

  render() {
    let {dashboardData} = this.props
    return (
      <div className="content">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Capacity</p>
                      <p className="card-title">{dashboardData.capacity}GB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr/>
                <div className="stats">
                  <i className="fa fa-refresh"></i>
                  Update Now
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <p className="card-title">$ {dashboardData.revenue}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr/>
                <div className="stats">
                  <i className="fa fa-calendar-o"></i>
                  Last day
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Errors</p>
                      <p className="card-title">{dashboardData.errors}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr/>
                <div className="stats">
                  <i className="fa fa-clock-o"></i>
                  In the last hour
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-body ">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <p className="card-title">+{dashboardData.followers}K</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer ">
                <hr/>
                <div className="stats">
                  <i className="fa fa-refresh"></i>
                  Update now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card ">
              <div className="card-header ">
                <h5 className="card-title">Users Behavior</h5>
                <p className="card-category">24 Hours performance</p>
              </div>
              <div className="card-body ">
                <canvas id="chartHours" width="400" height="100"></canvas>
              </div>
              <div className="card-footer ">
                <hr/>
                <div className="stats">
                  <i className="fa fa-history"></i> Updated 3 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header ">
                <h5 className="card-title">Email Statistics</h5>
                <p className="card-category">Last Campaign Performance</p>
              </div>
              <div className="card-body ">
                <canvas id="chartEmail"></canvas>
              </div>
              <div className="card-footer ">
                <div className="legend">
                  <i className="fa fa-circle text-primary"></i> Opened
                  <i className="fa fa-circle text-warning"></i> Read
                  <i className="fa fa-circle text-danger"></i> Deleted
                  <i className="fa fa-circle text-gray"></i> Unopened
                </div>
                <hr/>
                <div className="stats">
                  <i className="fa fa-calendar"></i> Number of emails sent
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-title">NASDAQ: AAPL</h5>
                <p className="card-category">Line Chart with Points</p>
              </div>
              <div className="card-body">
                <canvas id="speedChart" width="400" height="100"></canvas>
              </div>
              <div className="card-footer">
                <div className="chart-legend">
                  <i className="fa fa-circle text-info"></i> Tesla Model S
                  <i className="fa fa-circle text-warning"></i> BMW 5 Series
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check"></i> Data information certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dashboardData: state.dashboardData
  }
}


export default connect(mapStateToProps, null)(Index)