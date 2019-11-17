class Adornment extends React.Component{
  constructor(props) {
    super(props);
    this.grassDom = [];
    var left = 87;
    for(let i=0;i<20;i++) {
      left += Math.floor(Math.random()*15)*i;
      let top = 90 + Math.floor(Math.random()*10)*i;
      let style = {
        left: left+'px',
        top: top+'px'
      };
      this.grassDom.push(<div className={'grass'} style={style}></div>)
    }

    left = 480;
    for(let i=0;i<10;i++) {
      left += Math.floor(Math.random()*15)*i;
      let top = 90+Math.floor(Math.random()*10)*i;
      let style = {
        left: left+'px',
        top: top+'px'
      };
      this.grassDom.push(<div className={'grass'} style={style}></div>)
    }

    var top = 123;
    for(let i=0;i<20;i++) {
      let left = 389+Math.floor(Math.random()*10)*i;
      top += Math.floor(Math.random()*10)*i;
      let style = {
        left: left+'px',
        top: top+'px'
      };
      this.grassDom.push(<div className={'grass'} style={style}></div>)
    }
  }
  renderGrass() {
    return this.grassDom
  }
  componentDidMount() {
    // $('.flower').draggable();
    // $('.grass').draggable();
  }
  render() {
    return (
      <div className="adornment">
        {this.renderGrass()}
        <div className="chicken c1"></div>
        <div className="chicken c2"></div>
        <div className="chicken-s c4"></div>
        <div className="chicken-s c5"></div>
        <div className="chicken-s c6"></div>
        <div className="chicken-s c7"></div>
        <div className="tree tree1 t1" ></div>
        <div className="tree tree2 t2" ></div>
        <div className="tree tree1 t3" ></div>
        <div className="tree tree2 t4" ></div>
        <div className="flower f1" ></div>
        <div className="flower f2" ></div>
        <div className="flower f3" ></div>
      </div>
    );
  }
}
