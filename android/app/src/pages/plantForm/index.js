import {useForm} from 'react-hook-form';
import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {TextInput, Button, Text, Card, Divider} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IMAGE_URI from '../../main/assets/images/plant.gif';
const FORM = [
  {
    id: 'name',
    label: 'Nome',
    initialValues: '',
  },
  {
    id: 'description',
    label: 'Descriçao',
    initialValues: '',
  },
  {
    id: 'subtitle',
    label: 'Legenda',
    initialValues: '',
  },
];

const PlantForm = ({navigation}) => {
  const {setValue, handleSubmit, errors} = useForm({
    defaultValues: {},
  });

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <View>
      <ScrollView>
        <Card>
          <Card.Cover source={IMAGE_URI} />
          <Card.Actions>
            <Button color="black">Adicionar Foto</Button>
            <Icon size={25} name="add-photo-alternate"></Icon>
          </Card.Actions>
        </Card>
        {FORM.map(field => {
          return (
            <TextInput
              label={field.label}
              mode="outlined"
              key={field.id}
              onChangeText={text => setValue(field.id, text)}
              maxLength={10}
            />
          );
        })}

        <Text
          style={{
            fontSize: 15,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          Configuracoes do CareGarden
        </Text>
        <Divider
          style={{
            height: 4,
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <TextInput label={'id'} mode="outlined" maxLength={10} />
        <Button mode="outlined" onPress={handleSubmit(onSubmit)}>
          Salvar
        </Button>
      </ScrollView>
    </View>
  );
};

export default PlantForm;
