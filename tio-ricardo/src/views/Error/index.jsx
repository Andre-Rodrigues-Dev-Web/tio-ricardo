import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { ErrorContainer, ErrorMessage, ErrorLink } from './style';

const Error = () => {
    return (
        <ErrorContainer role="alert" aria-labelledby="error-title" aria-describedby="error-description">
            <FaExclamationTriangle size={70} aria-hidden="true" /> 
            <h1 id="error-title">404</h1>
            <ErrorMessage id="error-description">Página não encontrada</ErrorMessage>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <ErrorLink to="/">Voltar para a página inicial</ErrorLink>
        </ErrorContainer>
    );
};

export default Error;
