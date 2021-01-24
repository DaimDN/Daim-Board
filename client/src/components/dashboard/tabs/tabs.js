import React, { Fragment } from 'react'
import './tabs.css';

import Chart5 from '../charts/chart5';
import Chart4 from '../charts/chart4';
export default function Tabs() {
    return (
        <Fragment>
        <div>

            <div class="row">
                <div class="col-xs-12 ">
                  <nav>
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Linear Graph</a>
                      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Quatratic Graph</a>
                      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Production</a>
                      <a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Expenses</a>
                      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Stock</a>
                      <a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Market</a>
                    </div>
                  </nav>
                  <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent" style={{width: '90vw'}}>
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <br/>
                    
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Global Sales</h5>
                            <h4 class="card-title">Current Stock</h4>
                            <Chart5/>
                        
                            </div>
                            </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    
                    <br/>
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Global Sales</h5>
                            <h4 class="card-title">Current Stock</h4>
                            <Chart4/>
                        
                            </div>
                    </div>
                    </div>

                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Global Sales</h5>
                            <h4 class="card-title">Current Stock</h4>
                            <Chart5/>
                        
                            </div>
                    </div>
                    </div>

                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Global Sales</h5>
                            <h4 class="card-title">Current Stock</h4>
                            <Chart5/>
                        
                            </div>
                    </div>
                    </div>


                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Global Sales</h5>
                            <h4 class="card-title">Current Stock</h4>
                            <Chart5/>
                        
                            </div>
                    </div>
                    </div>


                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h5 class="card-category">Global Sales</h5>
                            <h4 class="card-title">Current Stock</h4>
                            <Chart5/>
                        
                            </div>
                    </div>
                    </div>
                    
                    
                  </div>
                
                </div>
              </div>
        
        </div>
        </Fragment>
    )
}
