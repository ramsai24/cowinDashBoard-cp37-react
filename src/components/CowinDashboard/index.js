// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

class CowinDashboard extends Component {
  state = {data: {}, apiStatus: 'initial'}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: 'inprogress'})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    const updateList = {
      last7DaysVaccination: data.last_7_days_vaccination,
      vaccinationByAge: data.vaccination_by_age,
      vaccinationByGender: data.vaccination_by_gender,
    }

    if (response.ok) {
      this.setState({data: updateList, apiStatus: 'success'})
    } else {
      this.setState({apiStatus: 'failure'})
    }
  }

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderSuccessView = () => {
    const {data} = this.state
    // console.log(data)
    const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} = data
    // console.log(last7DaysVaccination, vaccinationByAge, vaccinationByGender)
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1>Co-WIN</h1>
        </div>
        <h1>CoWIN Vaccination in India</h1>
        {last7DaysVaccination !== undefined && (
          <VaccinationCoverage data={last7DaysVaccination} />
        )}
        {VaccinationByGender !== undefined && (
          <VaccinationByGender data1={vaccinationByGender} />
        )}
        {/* <VaccinationByGender data1={VaccinationByGender} /> ** sending function as arugument so error arraised due to copy paste */}
        {VaccinationByAge !== undefined && (
          <VaccinationByAge data1={vaccinationByAge} />
        )}
        {/* <VaccinationByGender data={vaccinationByGender} />
        <VaccinationByAge data={vaccinationByAge} /> */}
      </div>
    )
  }

  renderFailureView = () => (
    <div>
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1>Co-WIN</h1>
        </div>
        <h1>CoWIN Vaccination in India</h1>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
        />
        <h1>Something went wrong</h1>
      </div>
    </div>
  )

  renderViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'inprogress':
        return this.renderLoaderView()
      case 'success':
        return this.renderSuccessView()
      case 'failure':
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    // const {data} = this.state
    // console.log(data)
    // const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} = data
    // console.log(last7DaysVaccination, vaccinationByAge, vaccinationByGender)
    return <div>{this.renderViews()}</div>
  }
}

export default CowinDashboard
