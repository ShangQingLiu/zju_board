import React from 'react'
import {Button, Card, TextField} from "@material-ui/core";

const types = [
    {
        value: 'get',
        label: 'get'
    },
    {
        value: 'post',
        label: 'post'
    },
];

interface State {
    url: string;
    json: string;
    res: string;
    type: string;
}

export default function TestForm() {
    const [values, setValues] = React.useState<State>({
        url: 'url test',
        json: 'json test',
        res: '',
        type: 'get'
    });

    const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [name]: event.target.value})
    };

    return (
        <div>
            <form>
                <TextField id="url" value={values.url} onChange={handleChange('url')} margin="normal"/>
                <TextField id="json" value={values.json} onChange={handleChange('json')} margin="normal"/>
                <TextField
                    id="type"
                    value={values.type}
                    select
                    onChange={handleChange('type')}
                    margin="normal"
                    SelectProps={{
                        native: true
                    }}
                >
                    {types.map(option=>(
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </form>
            <Card>
                Response Fill
            </Card>
            <Button color="primary" variant="contained">
                发送
            </Button>
        </div>
    )
}