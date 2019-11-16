class SubField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 1,
      field_id: this.props.fieldId,
      wet: '',
      plant: ''
    }
    if (this.props.enableState == 'disable') {
      this.state.level = 0
    } 
  }
  fieldImgClass() {
    var fieldImgClassInfo = {
      'level0': 'wasteland',
      'level1': 'weed',
      'level2': 'space',
      'level3': 'seed',
      'level4': 'seeding',
      'level5': 'grow-small',
      'level6': 'grow',
    };
    var subClass = ' ';
    if (this.state.level) {
      let levelName = 'level'+this.state.level.toString();
      subClass += fieldImgClassInfo[levelName];
    }
    subClass += ' '+this.state.wet;
    return subClass
  }
  clickField() {
    console.log('click field');
    let newState = {
      field_id: this.state.field_id,
      wet: this.state.wet,
      plant: this.state.plant
    };
    if (this.state.field_id < 12) return;
    let weedingTools = ['grove', 'sickle'];
    let seeds = ['white-radish', 'cauliflower', 'qingjiang', 'persimmon'];
    console.log('mouseState: ', this.props.mouseState)
    if (this.props.mouseState.indexOf('water') > -1 && this.state.level > 1 ) {
      newState.wet = 'wet'
    }
    if (weedingTools.indexOf(this.props.mouseState) > -1) {
      newState.level = 2;
    } else if (this.state.level == 2 && seeds.indexOf(this.props.mouseState) > -1) {
      newState.plant = this.props.mouseState
      newState.level = 3;
    } else if (
              this.state.level == 2 && 
              newState.wet == 'wet' && 
              this.props.mouseState == 'plant-food'
              ){

    }
    // newState.level = this.state.level+1;
    this.setState(newState);

  }
  render() {
    return (
      <div 
        className={'sub-field '+this.fieldImgClass()}
        onClick={()=>{this.clickField()}}
      >
      {this.state.level}
        <div className={'plant '+this.state.plant}></div>
      </div>
      
    );
  }
}
class Field extends React.Component {
  constructor(props) {
    super(props)
  }
  renderSubField() {
    let field_list = [];
    for(var i=1;i<=20;i++) {
      let enableSate = '';
      if (i < 12) {
        enableSate = 'disable';
      }
      let dom = <SubField 
        enableState={enableSate} 
        fieldId={i.toString()} 
        mouseState={this.props.mouseState}
      />
      field_list.push(dom);
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
