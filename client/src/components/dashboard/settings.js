import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Sidebar from './sidebar';
import Chart1 from './charts/chart1';
import Chart2 from './charts/chart2';
import MyChart from './charts/chart3';
import Chart4 from './charts/chart4';
import Clock from 'react-live-clock';
import DashSide from './DashSide';
import './dashside.css'




const Dashboard = ({
  getCurrentProfile,
  auth: { user, isAuthenticated }, logout,
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
   
    <div class="">
    <div style={{
       fontWeight: '600',
       position: 'fixed',
       width: '100vw',
       right: '0',
       zIndex: '200',
       top: '-10px',
       height: '200vh',
       backgroundColor: 'rgb(0, 0, 0, 0.8)',
       
       
       }}>
<div style={{
        padding: '30px',
        position: 'absolute',
        zIndex: '600'
      }}>
      <a href="/dashboard">
     <i style={{color: 'white', cursor: 'pointer'}} class="fas fa-2x fa-times-circle"></i>
     </a>
      </div>
       <div className="container" style={{
         position: 'absolute', 
         marginTop: '20vh',
         zIndex: '400', 
         marginLeft: '12%',
         color: 'black'
         
         
         }}>
        <div className="row">
          <div className="col-3 g text-center">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/3011/3011270.svg"
              style={{width: '25%'}}
              alt="nothing"
               />
               <br/>
               <br/>
              <h3 className="lead" style={{color: 'white', fontWeight: '800'}}>Profile Settings</h3>
          </div>
          <div className="col-3 g text-center">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/3869/3869457.svg"
              style={{width: '25%'}}
              alt="nothing"
               />
               <br/>
               <br/>
              <h3 className="lead" style={{color: 'white' , fontWeight: '800'}}>Charts Settings</h3>
          </div>
          <div className="col-3 g text-center" > 
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/900/900834.svg"
              style={{width: '25%'}}
              alt="nothing"
               />
               <br/>
               <br/>
              <h3 className="lead" style={{color: 'white' , fontWeight: '800'}}>App Settings</h3>
          
          
          </div>
          
          <br/>
          
        </div>

         

        




       </div>



    </div>
    <div style={{zIndex: '300', position:'absolute'}}><DashSide/></div>
     <h2 >
     JP MORGAN DASHBOARD
          </h2>
          <h4> <Clock format={"dddd, MMMM Do YYYY, h:mm:ss a"} ticking={true} timezone={'Europe/Belfast'} /></h4>
    <Sidebar />
    <br/>
    
    <div className="row">

    <div className="col-4">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Global Sales</h5>
                <h4 class="card-title">Current Stock</h4>
                <Chart1/>
               
                </div>
                </div>
    </div>
    <div className="col-4">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Global Sales</h5>
                <h4 class="card-title">Market</h4>
                <Chart2/>
               
                </div>
                </div>
    </div>
    <div className="col-4">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">Global Sales</h5>
                <h4 class="card-title">Pricing</h4>
                <Chart1/>
               
                </div>
                </div>
    </div>

    

    </div>
   
    <div className="row">

    <div className="col-6">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">GDP</h5>
                <h4 class="card-title">JP Morgan</h4>
                <MyChart/>
               
               
                </div>
                </div>
    </div>
    <div className="col-6">
    <div class="card card-chart">
              <div class="card-header">
                <h5 class="card-category">GDP</h5>
                <h4 class="card-title">JP Morgan</h4>
                <Chart4/>
               
               
                </div>
                </div>
    </div>

 
      
    </div>
    </div>
      
    
    
      {profile !== null ? (
        <Fragment>
         
         
        </Fragment>
      ) : (
        <Fragment>
          
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  Dashboard
);
