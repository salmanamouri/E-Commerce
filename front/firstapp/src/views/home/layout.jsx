function Layout() {
    return (
        <>
            <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-xl-6 grid-margin stretch-card flex-column">
            <h5 className="mb-2 text-titlecase mb-4">Status statistics</h5>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="mb-0 text-muted">Transactions</p>
                      <p className="mb-0 text-muted">+1.37%</p>
                    </div>
                    <h4>1352</h4>
                    <canvas id="transactions-chart" className="mt-auto" height={65} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>
                        <p className="mb-2 text-muted">Sales</p>
                        <h6 className="mb-0">563</h6>
                      </div>
                      <div>
                        <p className="mb-2 text-muted">Orders</p>
                        <h6 className="mb-0">720</h6>
                      </div>
                      <div>
                        <p className="mb-2 text-muted">Revenue</p>
                        <h6 className="mb-0">5900</h6>
                      </div>
                    </div>
                    <canvas id="sales-chart-a" className="mt-auto" height={65} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row h-100">
              <div className="col-md-6 stretch-card grid-margin grid-margin-md-0">
                <div className="card">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <p className="text-muted">Sales Analytics</p>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h3 className="mb-">27632</h3>
                      <h3 className="mb-">78%</h3>
                    </div>
                    <canvas id="sales-chart-b" className="mt-auto" height={38} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="row h-100">
                      <div className="col-6 d-flex flex-column justify-content-between">
                        <p className="text-muted">CPU</p>
                        <h4>55%</h4>
                        <canvas id="cpu-chart" className="mt-auto" />
                      </div>
                      <div className="col-6 d-flex flex-column justify-content-between">
                        <p className="text-muted">Memory</p>
                        <h4>123,65</h4>
                        <canvas id="memory-chart" className="mt-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 grid-margin stretch-card flex-column">
            <h5 className="mb-2 text-titlecase mb-4">Income statistics</h5>
            <div className="row h-100">
              <div className="col-md-12 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                      <div>
                        <p className="mb-3">Monthly Increase</p>
                        <h3>67842</h3>
                      </div>
                      <div id="income-chart-legend" className="d-flex flex-wrap mt-1 mt-md-0" />
                    </div>
                    <canvas id="income-chart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body border-bottom">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-2 mb-md-0 text-uppercase font-weight-medium">Overall sales</h6>
                  <div className="dropdown">
                    <button className="btn bg-white p-0 pb-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Last 30 days
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="javascript:;">Action</a>
                      <a className="dropdown-item" href="javascript:;">Another action</a>
                      <a className="dropdown-item" href="javascript:;">Something else here</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="javascript:;">Separated link</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <canvas id="sales-chart-c" className="mt-2" />
                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3 mt-4">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="text-muted">Gross Sales</p>
                    <h5>492</h5>
                    <div className="d-flex align-items-baseline">
                      <p className="text-success mb-0">0.5%</p>
                      <i className="typcn typcn-arrow-up-thick text-success" />
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="text-muted">Purchases</p>
                    <h5>87k</h5>
                    <div className="d-flex align-items-baseline">
                      <p className="text-success mb-0">0.8%</p>
                      <i className="typcn typcn-arrow-up-thick text-success" />
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="text-muted">Tax Return</p>
                    <h5>882</h5>
                    <div className="d-flex align-items-baseline">
                      <p className="text-danger mb-0">-04%</p>
                      <i className="typcn typcn-arrow-down-thick text-danger" />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="dropdown">
                    <button className="btn bg-white p-0 pb-1 pt-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Last 7 days
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="javascript:;">Action</a>
                      <a className="dropdown-item" href="javascript:;">Another action</a>
                      <a className="dropdown-item" href="javascript:;">Something else here</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="javascript:;">Separated link</a>
                    </div>
                  </div>
                  <p className="mb-0">overview</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card newsletter-card bg-gradient-warning">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100">
                      <h5 className="mb-3 text-white">Newsletter</h5>
                      <form className="form d-flex flex-column align-items-center justify-content-between w-100">
                        <div className="form-group mb-2 w-100">
                          <input type="text" className="form-control" placeholder="email address" />
                        </div>
                        <button className="btn btn-danger btn-rounded mt-1" type="submit">Subscribe</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 stretch-card">
                <div className="card profile-card bg-gradient-primary">
                  <div className="card-body">
                    <div className="row align-items-center h-100">
                      <div className="col-md-4">
                        <figure className="avatar mx-auto mb-4 mb-md-0">
                          <img src="images/faces/face20.jpg" alt="avatar" />
                        </figure>
                      </div>
                      <div className="col-md-8">
                        <h5 className="text-white text-center text-md-left">Phoebe Kennedy</h5>
                        <p className="text-white text-center text-md-left">kennedy@gmail.com</p>
                        <div className="d-flex align-items-center justify-content-between info pt-2">
                          <div>
                            <p className="text-white font-weight-bold">Birth date</p>
                            <p className="text-white font-weight-bold">Birth city</p>
                          </div>
                          <div>
                            <p className="text-white">16 Sep 2019</p>
                            <p className="text-white">Netherlands</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body border-bottom">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-2 mb-md-0 text-uppercase font-weight-medium">Sales statistics</h6>
                  <div className="dropdown">
                    <button className="btn bg-white p-0 pb-1 text-muted btn-sm dropdown-toggle" type="button" id="dropdownMenuSizeButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Last 7 days
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton4">
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="javascript:;">Action</a>
                      <a className="dropdown-item" href="javascript:;">Another action</a>
                      <a className="dropdown-item" href="javascript:;">Something else here</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="javascript:;">Separated link</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <canvas id="sales-chart-d" height={320} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                  <div>
                    <p className="mb-2 text-md-center text-lg-left">Total Expenses</p>
                    <h1 className="mb-0">8742</h1>
                  </div>
                  <i className="typcn typcn-briefcase icon-xl text-secondary" />
                </div>
                <canvas id="expense-chart" height={80} />
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                  <div>
                    <p className="mb-2 text-md-center text-lg-left">Total Budget</p>
                    <h1 className="mb-0">47,840</h1>
                  </div>
                  <i className="typcn typcn-chart-pie icon-xl text-secondary" />
                </div>
                <canvas id="budget-chart" height={80} />
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                  <div>
                    <p className="mb-2 text-md-center text-lg-left">Total Balance</p>
                    <h1 className="mb-0">$7,243</h1>
                  </div>
                  <i className="typcn typcn-clipboard icon-xl text-secondary" />
                </div>
                <canvas id="balance-chart" height={80} />
              </div>
            </div>
          </div>
        </div>
        

 

      </div>
      {/* content-wrapper ends */}
      {/* partial:partials/_footer.html */}
      <footer className="footer">
        <div className="card">
          <div className="card-body">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2020 <a href="https://www.bootstrapdash.com/" className="text-muted" target="_blank">Bootstrapdash</a>. All rights reserved.</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center text-muted">Free <a href="https://www.bootstrapdash.com/" className="text-muted" target="_blank">Bootstrap dashboard</a> templates from Bootstrapdash.com</span>
            </div>
          </div>    
        </div>        
      </footer>
      {/* partial */}
    </div>
        </>
    )
}
export default Layout;