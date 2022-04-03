import places2eat from "../images/Place2eat.jpg";

const Places = () => {
    return ( 
        <div className="Places">
            <h2> Places to go </h2>

            <section>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 order-lg-2">
                <div class="p-5"><img class="rounded-circle img-fluid" src={places2eat} /></div>
            </div>
            <div class="col-lg-6 order-lg-1">
                <div class="p-5">
                    <h2 class="display-4">For those who love to eat</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
        
     );
}
 
export default Places;