<template>
    <div id="citation" class="row m-0">
        <citation></citation>
        
        <div class="col-md-5 d-flex flex-column justify-content-center align-items-center mt-3" id="contact">
            <form action="mailto:steevehenrard5@gmail.com" method="POST" enctype="text/plain">
                <h2 class="mb-5 d-flex flex-start">Hello. Let's work together</h2>
                <div class="form-group d-inline-flex">
                  <input type="text" class="form-control mr-3" name="firstname" id="firstname" placeholder="Firstname">
                  <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Lastname">
                </div>

                <div class="form-group d-flex justify-content-center mt-3">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email">
                </div>
                
                <div class="form-group d-flex justify-content-center mt-3">
                  <textarea class="form-control" rows="7" name="content" style=resize:none></textarea>
                </div>

                <button type="submit" name="submit" class="btn mt-3">Send</button>

            </form>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
export default {
    
}
</script>