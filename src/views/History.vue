<template>
  <div class="container-wrapper">
     <div class="header">
      <div class="content-head1">
        <div class="ctn-search1" style="cursor: pointer">
          <img src="image/menu (1).png" alt="" />
        </div>
        <div class="ctn">Food Items</div>
      </div>
    </div>
    <nav>
      <ul>
        <li><img src="/icon/add.png" alt="" /></li>
        <li>
          <a href="/dashboard.html"
            ><img src="icon/clipboard.png" alt=""
          /></a>
        </li>
        <li>
          <a href="index.html"><img src="icon/fork (1).png" alt="" /></a>
        </li>
      </ul>
    </nav>
    <main class="main-content">
      <div class="content-dashboard">
        <div class="db-1">
          <p>Today’s Income</p>
          <h1>Rp. 1.000.000</h1>
          <span>+2% Yesterday</span>
        </div>
        <div class="db-2">
          <p>Today’s Income</p>
          <h1>Rp. 1.000.000</h1>
          <span>+2% Yesterday</span>
        </div>
        <div class="db-3">
          <p>Today’s Income</p>
          <h1>Rp. 1.000.000</h1>
          <span>+2% Yesterday</span>
        </div>
      </div>
      <div class="content-dashboard2" style="border: 1px solid royalblue">
        <div class="card">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <canvas id="myChart" width="30" height="10"></canvas>
          </div>
        </div>
      </div>
      <div class="content-dashboard3 mt-4" style="border: 1px solid blueviolet">
        <div class="card" style="padding-bottom: 50px">
        <div class="card-header tbl">
          <div><h1>recent order</h1></div>
          <div class="btn-group">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Action
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      </div>
          <div class="card-body">
            <div class="table-responsive-lg">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">invoice</th>
                    <th scope="col">Cashier</th>
                    <th scope="col">Date</th>
                    <th scope="col">Order</th>
                    <th scope="col">amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="fixed-bottom">
      <div class="footer-content">
        <div class="ftn">
          <a href="/dashboard.html"
            ><img src="assets/icon/clipboard.png" alt=""
          /></a>
        </div>
        <div class="ftn">
          <a href="/index.html"
            ><img src="assets/icon/fork (1).png" alt=""
          /></a>
        </div>
        <div class="ftn"><img src="assets/icon/add.png" alt="" /></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>
