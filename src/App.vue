<template>
  <div class="container text-center vh-100">
    <div class="text-center mt-3">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark pl-1 pr-1 mt-1 mb-4">
        <button
          class="navbar-toggler btn"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mt-1 ml-1 rm-2">
              <a href="/" class="btn btn-github icon">Home </a>
            </li>
            <li class="nav-item mt-1 ml-1 rm-2">
              <a href="/about" class="btn btn-github icon">About </a>
            </li>
            <li class="nav-item mt-1 ml-1 rm-2">
              <a href="/contact" class="btn btn-github icon">Contact </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mt-1 ml-1 rm-2">
              <a href="/" class="btn btn-github icon">r-link 1 </a>
            </li>
            <li class="nav-item mt-1 ml-1 rm-2">
              <a href="/" class="btn btn-github icon">r-link 2 </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="page">
      <router-view />
      <br />
    </div>
    <hr />
    <br /><br />
    <div class="footer col-sm-12">
      <div class="text-center">
        <br /><br />Made with 💜💜💜💜💜💜 by <br /><a href="http://github.com/casjay" target="_blank" rel="noopener" class="text-primary"
          >Jason M. Hempstead (Casjay)</a
        >
      </div>
      <div class="purple-gradient text-center"><br /><br /></div>
      <!-- Begin Footer -->
      <div class="footer-custom" align="center">
        <br />
        <!-- Begin Casjays Developments Footer -->
        Copyright 1999 - 2023
        <br />
        <a href="https://casjay.pro" target="_blank" rel="noopener noreferrer">Casjays Developments</a>
        and
        <a href="https://malaks-us.github.io/jason" target="_blank" rel="noopener noreferrer">Jason M. Hempstead-Malak</a><br />
        Hosting by
        <a href="https://casjay.pro/hosting" target="_blank" rel="noopener noreferrer">Casjays Developments: Hosting</a><br />
        and powered by
        <a href="https://casjaysdev.pro" target="_blank" rel="noopener noreferrer">CasjaysDev.com</a>
        <br />
        <br />
        <a href="https://www.patreon.com/casjay" target="_blank" rel="noopener noreferrer"
          ><img src="https://img.shields.io/badge/patreon-donate-orange.svg" border="0" alt="Casjays Patreon Page"
        /></a>
        <a href="https://www.paypal.me/casjaysdev" target="_blank" rel="noopener noreferrer"
          ><img src="https://img.shields.io/badge/Donate-PayPal-green.svg?casjay@yahoo.com" alt="Casjays Paypal Page"
        /></a>
        <br />
        <br />
        <a href="https://help.casjay.pro" target="_blank" rel="noopener noreferrer">CasjaysDev Support</a>
        |
        <a href="https://bugs.casjay.pro" target="_blank" rel="noopener noreferrer">CasjaysDev Bugs</a>
        <br />
        <a href="https://status.casjay.pro" target="_blank" rel="noopener noreferrer">System Status</a>
        |
        <a href="https://servers.casjay.pro" target="_blank" rel="noopener noreferrer">Service Status</a>
        |
        <a href="https://status.casjaysdev.pro" target="_blank" rel="noopener noreferrer">Complete Status</a>
        <br />
        <a href="https://casjaysdev.pro/domains.html" target="_blank" rel="noopener noreferrer">Casjays Developments Domains</a>
        <br />
        <br />
        Casjays Developments privacy policy can be found at<br />
        <a href="https://casjaysdev.pro/policy/" target="_blank" rel="noopener noreferrer">https://casjaysdev.pro/policy</a>
        <br />
        <!-- End Casjays Developments Footer -->
        <!-- Begin theme Code -->
        <div class="text-center" style="color: royalblue">
          <br />
          Made with 💜💜💜💜💜💜 by <br />
          <a href="http://github.com/casjay" target="_blank" rel="noopener"> Jason M. Hempstead (Casjay)</a><br />
          This site is powered by an
          <a href="https://github.com/casjay-templates" target="_blank" rel="noopener noreferrer"> open source </a>theme
        </div>
        <br />
        <!-- End Theme powered -->
      </div>
      <br />
      <br />
      <!-- End Footer -->
    </div>
    <br /><br /><br /><br />
  </div>
</template>

<script setup></script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
