import React from 'react';

interface TextInputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isTextArea?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ type, placeholder, value, onChange, isTextArea = false }) => {
    return (
        <>
            {isTextArea ? (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="input-textarea"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="input-field"
                />
            )}
        </>
    );
};

export default TextInput;