class SubFramePestControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
    this.items = [
      {
        name: "item1",
        ct_name: "生物性農藥",
        desc: "天然物質如動物、植物、微生物及其所衍生之產品，對人畜安全無毒害，不會危及鳥類，其他生物"      },
      {
        name: "item2",
        ct_name: "茶皂素",
        desc: "天然植物提煉之殺蟲劑。優點：易降解，無殘留"
      },
      {
        name: "item3",
        ct_name: "除蟲菊精",
        desc: "天然化合物殺蟲劑。優點：高效、低毒、易降解"
      },
      {
        name: "item4",
        ct_name: "礦物油",
        desc: "天然殺蟲劑、殺菌劑，使昆蟲物理性窒息。優點：高效、經濟"
      }
    ];
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  select(itemName) {
    console.log('select: ', itemName);
    this.props.changeMouseState(itemName);
    this.close();
  }
  close(e) {
    if (e) e.stopPropagation();
    this.props.clickHandler();
  }
  renderDesc(desc) {
    this.setState({'desc': desc});
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onMouseOver={()=>{this.renderDesc(item.desc)}}
          >{item.ct_name}</div>)
      }

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame pest-control" id="sub-frame">
        <div className="description">
          {this.state.desc}
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

