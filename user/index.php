<?php
include "assets/header.php";
include "assets/nav.php";
?>

<div class="row">
    <div class="col-lg-12">
        <div class="profile">
            <div class="profile-head">
                <div class="photo-content">
                    <div class="cover-photo"></div>
                    <div class="col-12">
                        <div class="row page-titles mx-0">
                            <div class="col-sm-6 p-md-0">
                                <div class="welcome-text">
                                    <h4>Hi, welcome back!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile-info">
                    <div class="row justify-content-center">
                        <div class="col-xl-2">
                            <div class="profile-photo">
                                <img src="images/profile/profile.png" class="img-fluid rounded-circle" alt="" />
                            </div>
                        </div>
                        <div class="col-xl-10">
                            <div class="row">
                                <div class="col-xl-12 col-sm-4 border-right-1 prf-col">
                                    <div class="profile-name">
                                        <h6 class="text-muted" style="font-size: 20px;">ID</h6>
                                        <p class="text-primary" style="font-weight: 600;">01234</p>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-sm-4 border-right-1 prf-col">
                                    <div class="profile-name">
                                        <h6 class="text-muted" style="font-size: 20px;">NAME</h6>
                                        <p>RAHUL CHOWDHURY</p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-4 border-right-1 prf-col">
                                    <div class="profile-email">
                                        <h6 class="text-muted" style="font-size: 20px;">D.O.B</h6>
                                        <p>20.12.1910</p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-4 prf-col">
                                    <div class="profile-call">
                                        <h6 class="text-muted" style="font-size: 20px;">GENDER</h6>
                                        <p>MALE</p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-4 prf-col">
                                    <div class="profile-call">
                                        <h6 class="text-muted" style="font-size: 20px;">AGE</h6>
                                        <p>02 years</p>
                                    </div>
                                </div>

                                <div class="col-xl-6 col-sm-8 border-right-1 prf-col">
                                    <div class="profile-name">
                                        <h6 class="text-muted" style="font-size: 20px;">ADDRESS</h6>
                                        <p>AAAAAAAABBBBBBBBBBBBABABABABABABABABBABBBBBBBBBBBB</p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-4 prf-col">
                                    <div class="profile-call">
                                        <h6 class="text-muted" style="font-size: 20px;">PH. NO.</h6>
                                        <p>+91 1234567890</p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-sm-4 prf-col">
                                    <div class="profile-call">
                                        <h6 class="text-muted" style="font-size: 20px;">PIN</h6>
                                        <p>712305</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-12">
    <div class="card">
        <div class="card-body">
            <div class="table-responsive">
                <table id="example" class="display" style="min-width: 845px; text-align: center;">
                    <thead>
                        <tr>
                            <th>SL.NO.</th>
                            <th>DOCTOR NAME</th>
                            <th>DATE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Voda</td>
                            <td>08/05/2001</td>
                            <td>
                                <div class="btn-group m-b-10">
                                    <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="22.5" viewBox="0 0 576 512">
                                            <path fill="#ffffff" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                        </svg>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Prescription</a>
                                        <a class="dropdown-item" href="#">Medical Test Report</a>
                                        <a class="dropdown-item" href="#">Medical Bill</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Doctor Profile</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


<?php
include "assets/footer.php";
?>