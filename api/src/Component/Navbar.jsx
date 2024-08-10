import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";

function Navbar(){
    return(
        <>        
<div className="col-md-12">
    <div className="row">

    <header className="col-md-3">

<nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white pos">
  <div class="position-fixed">
    <div class="list-group list-group-flush mx-3 mt-5">
      
      <a
        class="list-group-item list-group-item-action py-2 ripple"
        aria-current="true"
        data-mdb-toggle="collapse"
        href="#collapseExample1"
        aria-expanded="true"
        aria-controls="collapseExample1"
      >
        <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Expanded menu</span>
      </a>
     
      <ul id="collapseExample1" class="collapse show list-group list-group-flush">
        <li class="list-group-item py-1">
          <a href="" class="text-reset">Link</a>
        </li>
        <li class="list-group-item py-1">
          <a href="" class="text-reset">Link</a>
        </li>
        <li class="list-group-item py-1">
          <a href="" class="text-reset">Link</a>
        </li>
        <li class="list-group-item py-1">
          <a href="" class="text-reset">Link</a>
        </li>
      </ul>
      

      
      <a
        class="list-group-item list-group-item-action py-2 ripple"
        aria-current="true"
        data-mdb-toggle="collapse"
        href="#collapseExample2"
        aria-expanded="true"
        aria-controls="collapseExample2"
      >
        <i class="fas fa-chart-area fa-fw me-3"></i><span>Collapsed menu</span>
      </a>
     
      <ul id="collapseExample2" class="collapse list-group list-group-flush">
        <li class="list-group-item py-1">
          <a href="" class="text-reset">Link</a>
        </li>
        <li class="list-group-item py-1">
          <a href="" class="text-reset">Link</a>
        </li>
        <li class="list-group-item py-1">
          <a href="" class="text-reset">Link</a>
        </li>
        <li class="list-group-item py-1">
          <a href="" class="text-reset">Link</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

<nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">

  <div class="container-fluid">

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

   
    <a class="navbar-brand" href="#">
      <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="25"
        alt="MDB Logo"
        loading="lazy"
      />
    </a>
  
    <form class="d-none d-md-flex input-group w-auto my-auto">
      <input
        autocomplete="off"
        type="search"
        class="form-control rounded"
        placeholder='Search (ctrl + "/" to focus)'
        style={{minWidth: '225px'}}
      />
      <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
    </form>

  
    <ul class="navbar-nav ms-auto d-flex flex-row">
   
      <li class="nav-item dropdown">
        <a
          class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li><a class="dropdown-item" href="#">Some news</a></li>
          <li><a class="dropdown-item" href="#">Another news</a></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </li>

      
      <li class="nav-item">
        <a class="nav-link me-3 me-lg-0" href="#">
          <i class="fas fa-fill-drip"></i>
        </a>
      </li>
      
      <li class="nav-item me-3 me-lg-0">
        <a class="nav-link" href="#">
          <i class="fab fa-github"></i>
        </a>
      </li>

     
      <li class="nav-item dropdown">
        <a
          class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdown"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="flag-united-kingdom flag m-0"></i>
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#"
              ><i class="flag-united-kingdom flag"></i>English
              <i class="fa fa-check text-success ms-2"></i></a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
          </li>
        </ul>
      </li>

     
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
            class="rounded-circle"
            height="22"
            alt="Avatar"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li><a class="dropdown-item" href="#">My profile</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Logout</a></li>
        </ul>
      </li>
    </ul>
  </div>

</nav>

</header>



<main className="col-md-9" style={{marginTop: '40px'}}>
<div class="container pt-4 ">
  {/* <AddProduct /> */}
  <AddCategory />
</div>
</main>


    </div>
</div>






        </>
    )
}

export default Navbar;