import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';


class EmployeeForm extends Component {
    render() {

        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                    </CardSection>

                    <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                    </CardSection>

                    <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
                    >
                        <Picker.Item label="Lundi" value="Lundi" />
                        <Picker.Item label="Mardi" value="Mardi" />
                        <Picker.Item label="Mercredi" value="Mercredi" />
                        <Picker.Item label="Jeudi" value="Jeudi" />
                        <Picker.Item label="Vendredi" value="Vendredi" />
                        <Picker.Item label="Samedi" value="Samedi" />
                        <Picker.Item label="Dimanche" value="Dimanche" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
      fontSize: 18, 
      paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
  
    return { name, phone, shift };
  };
  export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);