import React, {useState} from 'react';
import { TextField, PrimaryButton, Toggle, DatePicker  } from 'office-ui-fabric-react';

function NewDate(){
    const [cita, setCita] = useState([]);

    const handlechange = (e) => {
        setCita( 

            {
            ...cita,
            [e.target.name] : e.target.value
        })

        console.log( e.target.name + ":" + e.target.value)
    }

    const DayPickerStrings = {
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        days: [ 'Monday', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        shortDays: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
        goToToday: 'Día de hoy',
        prevMonthAriaLabel: 'Ir al mes anterior',
        nextMonthAriaLabel: 'Ir al mes próximo',
        prevYearAriaLabel: 'Ir al año anterior',
        nextYearAriaLabel: 'Ir al año próximo',
        closeButtonAriaLabel: 'cerrar'
      };

    return (
        <div>
            <h2>Rellene el formulario para pedir una nueva cita</h2>
            <form>
                <div className="">
                    <TextField 
                        label="Nombre del paciente"                     
                        type="text"
                        className=""
                        placeholder="nombre del paciente"
                        name="nombrePaciente"
                        onChange= {handlechange}
                    />
                </div>
                <div>
                    <Toggle 
                        label="¿tiene obra social?"
                        inlineLabel
                        onText="si" 
                        offText="no"                     
                        className=""
                        name="obraSocial"
                        onChange= {handlechange}
                    />
                </div>
                <div className="">
                    <DatePicker 
                        label="Fecha para su cita"
                        strings= {DayPickerStrings}
                        placeholder="elija una fecha para su cita..." 
                        ariaLabel="Fecha para su cita" 
                        onChange= {handlechange}
                    />
                </div>
                <div className="">
                    <TextField 
                        label="Hora para su cita"
                        type="time"
                        className=""
                        name="hora"
                        onChange= {handlechange}
                    />
                </div>
                <div className="">
                    <TextField 
                        label="Motivo de la consulta"
                        multiline autoAdjustHeight
                        className=""
                        placeholder="describa el motivo de la consulta"
                        name="motivo"
                        onChange= {handlechange}
                    />
                </div>
                <div className="">
                    <PrimaryButton
                        //type="submit"
                        text="generar nueva cita"
                    />
                </div>
            </form>
        </div>
    );
}

export default NewDate;