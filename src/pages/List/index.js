import React from 'react';

export default function(props) {
    return (<PhoneList
                data={lists}
                keyExtractor={person => person.number}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: person }) => (
                    <PhoneItem name={person.name || 'Sem nome'} number={person.number} onEdit={() => {}} onDelete={() => {}}/>
                )}
            />);
}