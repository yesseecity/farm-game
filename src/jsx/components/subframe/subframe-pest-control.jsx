class SubFramePestControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    };
    this.items = [
      {
        name: "item3",
        ct_name: "除蟲菊精",
        desc: "除蟲菊精為天然化合物殺蟲劑，優點：高效、低毒、易降解。"
      },
      {
        name: "item4",
        ct_name: "礦物油",
        desc: "礦物油為天然殺蟲劑、殺菌劑，可使昆蟲物理性窒息，優點：高效、經濟。"
      },
      {
        name: "item5",
        ct_name: "印棟素",
        desc: "印棟素為天然植物提煉之殺蟲劑、殺菌劑，優點：高效、低毒、易降解。"
      },
      {
        name: "item2",
        ct_name: "茶皂素",
        desc: "茶皂素為天然植物提煉之殺蟲劑，優點：易降解，無殘留。"
      },
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

