import React from 'react'

const defaultLang = {
  lang: 'es',
  changeLang: (x: string) => { },
}

const LangContext = React.createContext(defaultLang)

const browserLang = () => { return navigator.language }

class LangProvider extends React.Component {
  state = {
    lang: 'es'
  }

  changeLang = (x: string) => {
    let lang = x
    localStorage.setItem('lang', JSON.stringify(lang))
    this.setState({ lang })
  }

  componentDidMount() {
    // Getting language value from localStorage!
    const lsLang = localStorage.getItem("lang")
    if (lsLang) {
      let parsedLsLang = JSON.parse(lsLang)
      this.setState({ lang: parsedLsLang })
    }
  }

  render() {
    const { children } = this.props
    const { lang } = this.state
    return (
      <LangContext.Provider
        value={{
          lang,
          changeLang: this.changeLang,
        }}
      >
        {children}
      </LangContext.Provider>
    )
  }
}

export default LangContext
export { LangProvider }
