function Main() {
  return (
    <div className="container mx-auto flex-1">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4 text-gray-700 p-5">
          <h3 className="text-2xl text-indigo-900 mb-5">Welcome!</h3>
          <p>Everything in this city is worth waiting in line for.</p>
          <p>Cupcake ipsum dolor sit. Amet chocolate cake gummies jelly beans candy bonbon brownie candy.
          Gingerbread powder muffin. Icing cotton candy. Croissant icing pie ice cream brownie I love
            cheesecake cookie. Pastry chocolate pastry jelly croissant.</p>
          <p>Cake sesame snaps sweet tart candy canes tiramisu I love oat cake chocolate bar. Jelly beans
          pastry brownie sugar plum pastry bear claw tiramisu tootsie roll. Tootsie roll wafer I love chocolate
            donuts.</p>
        </div>

        <div className="space-y-4 text-gray-700 p-5">
          <h3 className="text-2xl text-indigo-900 mb-5">Great food</h3>
          <div className="relative">
            <img src="/img/treats.svg" alt="Featured Drinks &amp; Eats!" />
            <img src="/img/location.svg" alt="Location" className="absolute w-8 -top-3 -right-3" />
            <div className="absolute bottom-0 bg-indigo-900 bg-opacity-80 text-white p-5">
              <p className="mb-2">Featured Drinks &amp; Eats!</p>
              <p>Croissant macaroon pie brownie cookie marshmallow liquorice gingerbread caramels toffee.
              </p>
            </div>
          </div>
          <p>Croissant macaroon pie brownie. Cookie marshmallow liquorice gingerbread caramels toffee I love
          chocolate. Wafer lollipop dessert. Bonbon jelly beans pudding dessert sugar plum. Marzipan
            toffee dragée chocolate bar candy toffee pudding I love. Gummi bears pie gingerbread lollipop.</p>
        </div>

        <div className="md:col-start-1 md:col-end-3 lg:col-auto space-y-4 text-gray-700 p-5">
          <h3 className="text-2xl text-indigo-900 mb-5">How to get here</h3>
          <p>Plane: Tiramisu caramels gummies chupa chups lollipop muffin. Jujubes chocolate caramels
          cheesecake
            brownie lollipop dragée cheesecake.</p>
          <p>Train: Pie apple pie pudding I love wafer toffee liquorice sesame snaps lemon drops. Lollipop
            gummi bears dessert muffin I love fruitcake toffee pie.</p>
          <p>Car: Jelly cotton candy bonbon jelly-o jelly-o I love. I love sugar plum chocolate cake pie I
            love pastry liquorice.</p>
        </div>
      </div>
    </div>
  )
}

export default Main;