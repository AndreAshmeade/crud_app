<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD Application</title> 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  
  <!----Header----->
  <header id = "header">
    <nav>
      <div class="container">
        <div class="text-center">
          <a href="/" class="nav-brand text-dark">User Management System</a>
        </div>
      </div>
    </nav>
  </header>
  <!-----/Header-->


  <!------Main Site---->
  <main id="site-main">
    <div class="container">
      <div class="box-nav d-flex-justify-between">
        <div class="filter">
     <a href="/"><i class="fas fa-angle-double-left"></i> All Users </a>
        </div>
      </div>
      <div class="form-title text-center">
        <h2 class="text-dark">New User</h2>
        <span class="text-light">Use the below form to create a new account</span>
      </div>
      <!---Form----->
      <form method="POST" id="update_user">
        <div class="new_user">
          <div class="form-group">
            <label for="name" class="text-light">Name</label>
            <input type="hidden" name="id" value="">
            <input type="text" name="name" value="" placeholder="Mark Stoneis">
          </div>
          <div class="form-group">
            <label for="Email" class="text-light">Email</label>
            <input type="text" name="email" value="" placeholder="example@gmail.com">
          </div>
          <div class="form-group">
            <label for="gender" class="text-light">Gender</label>
            <div class="radio inline">
            <input type="radio" id="radio-2" name="gender" value="Male">
            <label for="radio-2" class="radio-label">Male</label>
            </div>
            <div class="radio inline">
              <input type="radio" id="radio-3" name="gender" value="Female">
              <label for="radio-3" class="radio-label">Female</label>
              </div>
          </div>
        
       <div class="form-group">
          <label for="gender" class="text-light">Status</label>
          <div class="radio inline">
          <input type="radio" id="radio-4" name="status" value="Active">
          <label for="radio-4" class="radio-label">Active</label>
          </div>
          <div class="radio inline">
            <input type="radio" id="radio-5" name="status" value="Inactive">
            <label for="radio-5" class="radio-label">Inactive</label>
            </div>
        </div>
      

        <div class="form-group">
          <button type="submit" class="btn text-dark update">Save</button>
        </div>

      </div>
      </form>
    </div>
  </main>
  <!------/Main Site---->
</body>
</html>
 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD Application</title> 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  
  <!----Header----->
  <header id = "header">
    <nav>
      <div class="container">
        <div class="text-center">
          <a href="/" class="nav-brand text-dark">User Management System</a>
        </div>
      </div>
    </nav>
  </header>
  <!-----/Header-->


  <!------Main Site---->
  <main id="site-main">
    <div class="container">
      <div class="box-nav d-flex-justify-between">
        <a href="/add-user" class="border-shadow">
          <span class="text-gradient">New User<i class="fa fa-user" aria-hidden="true" ></i></span>
        </a>
      </div>
      <!------form handing-->
      <form action="/" method="POST">
        <table class="table">
          <thead class ="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>@Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Username</td>
              <td>example@gmail.com</td>
              <td>Male</td>
              <td>Active</td>
              <td>
                <a href="#" class="btn border-shadow update">
                  <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                </a>
                <a class="btn border-shadow delete">
                  <span class="text-gradient"><i class="fas fa-times"></i></span>
                </a>
              </tb>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  </main>
  <!------/Main Site---->
</body>
</html>
 
