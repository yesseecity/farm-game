class SubField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 1,
      field_id: this.props.fieldId
    }
    if (this.props.enableSate == 'disable') {
      this.state.level = 0
    } 
  }
  fieldImgClass() {
    var fieldImgClassInfo = {
      'level0': 'wasteland',
      'level1': 'weed',
      'level2': 'space'
    };
    var subClass = ' ';
    if (this.state.level < 3) {
      let levelName = 'level'+this.state.level.toString();
      subClass += fieldImgClassInfo[levelName];
    }
    subClass += ' '+this.props.enableSate;
    return subClass
  }
  clickField() {
    let newState = {
      field_id: this.state.field_id
    };
    if (this.state.level == 2) return;
    newState.level = this.state.level+1;
    this.setState(newState);

    console.log('click field');
  }
  render() {
    return (
      <div 
        className={'sub-field '+this.fieldImgClass()}
        onClick={()=>{this.clickField()}}
      >
      {this.state.level}
        <div className="plant"></div>
      </div>
      
    );
  }
}
class Field extends React.Component {
  renderSubField() {
    let field_list = [];
    for(var i=1;i<=20;i++) {
      let enableSate = '';
      if (i < 12) {
        enableSate = 'disable';
      }
      field_list.push(<SubField enableSate={enableSate}  fieldId={i.toString()} />);
    }
    return field_list;
  }

  render() {
    return (
      <div className="field">
        {this.renderSubField()}
      </div>
    );
  }
}
