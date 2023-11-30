<?php
 
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("127.0.0.1", "root", "", "test");

/* change default database to "world" */
mysqli_select_db($link, "test");

/* get the name of the current default database */
$result = mysqli_query($link, "SELECT * FROM lunawissen ORDER BY `Alphabet` ASC");


?>
<!DOCTYPE html>











<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

    <head>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content />
        <meta name="author" content />
        <title>Luna Solutions - automate your business</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Bootstrap icons-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
        <link href="css/buttonDiv.css" rel="stylesheet" />
        <link href="css/list.css" rel="stylesheet" />

                <!-- Import JS -->
     
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../../source/styles/smart.default.css" />
        <link rel="stylesheet" type="text/css" href="../../styles/demos.css" />
        <!-- Export to PDF functions-->

    </head>
    <body class="d-flex flex-column">
        <main class="flex-shrink-0">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" href="index.html">LunaLearn</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="create_2.php">Create</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                            <!--<li class="nav-item"><a class="nav-link" href="faq.html">FAQ</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a class="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                    <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                    <li><a class="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                                    <li><a class="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                                </ul>
                            </li>-->
                        </ul>
                    </div>
                </div>
            </nav>



            <!-- Page content-->
            <section class="py-5">

                <div class="container px-5" >

                    <nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
                        <a class="navbar-brand">Inhaltsverzeichnis</a>
                        <hr>
                        </br>
                        <nav class="nav nav-pills flex-column" style="     max-height:500px; overflow-y:auto;  ">
                            <table id="databaseTable">

                            </table>
                        </nav>

                    </nav>

                </div>

                                           
                <div class="container px-5">
                    <nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
                        <a class="navbar-brand">Ausgewählte Einträge</a>
                        <hr>
                        </br>
                        <nav class="nav nav-pills flex-column" style="     max-height:250px; overflow-y:auto;  ">
                   
                    
                            <table id="selectedEntriesTable">
                         
                            <!-- Hier werden die ausgewählten Einträge dynamisch eingefügt -->
                    
                            </table>
                    
                        </nav>
                    </nav>
                </div>
                
            </section>
            <div class="buttonDiv"> <button onclick="getFromList()" class="createButton"> Create </button>    </div>
                  
            <p id="topic"></p>
            <p id="description"></p>
        </main>






        <!-- Footer-->
        <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Your Website 2022</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="#!">Privacy</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Terms</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>

        
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

        <!-- Show Data function -->
        <script type = "text/javascript" src="js/scripts.js"></script>
        <script src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js" integrity="sha512-csNcFYJniKjJxRWRV1R7fvnXrycHP6qDR21mgz1ZP55xY5d+aHLfo9/FcGDQLfn2IfngbAHd8LdfsagcCqgTcQ==" crossorigin = "anonymous" referrerpolicy = "no-referrer"> </script>
        <!-- Core theme JS-->
        <script src="js/script_create.js"></script>
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        
    </body>
</html>
