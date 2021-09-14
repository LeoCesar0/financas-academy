
export default function Header({handleFormView, formView}){

    return (
        <header className='header'>
            <h2 className='header-logo'>Finanças</h2>
            <button 
                className='header-button button'
                onClick={handleFormView}
            >
                {formView ? 'FECHAR' : 'ADICIONAR'}
            </button>
        </header>
    )
}