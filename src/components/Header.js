const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-1 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://static1.squarespace.com/static/61f00d1f82268b378f5d2630/t/62226aa9adea1c78f4550f55/1646422697433/BeFlowBN.png
                "
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://static1.squarespace.com/static/61f00d1f82268b378f5d2630/t/62226aa9adea1c78f4550f55/1646422697433/BeFlowBN.png
                "
                alt="Workflow"
              />
            </div>
            <div className="justify-center text-white uppercase">
              <p>Prueba Front End Indicadores Financieros</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
