import React, { useState } from 'react'
import cn from 'classnames'
import { Card } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'
import Controls from './Controls'
import * as S from './styled'
import { SEPARATORS, SEPARATOR_OPTIONS } from './constants'

const Generator = props => {
    const defaultSeparator = SEPARATORS.CURVED
    const [active, setActive] = useState(defaultSeparator)
    const [options, setOptions] = useState(SEPARATOR_OPTIONS[defaultSeparator])

    const useSeparator = val => {
        setActive(val)
        setOptions(SEPARATOR_OPTIONS[val])
    }

    const reversedClass = options.reversed ? 'reverse' : ''

    return (
        <React.Fragment>
            <S.Header>
                <div>
                    <a href='https://wweb.dev' target="_blank" rel="noopener noreferrer">
                        <img src="https://res.cloudinary.com/wwebdev/image/upload/v1585149959/logo-text_rhuhcl.png" alt="Logo of wweb.dev"/>
                    </a>
                </div>
                <a href='https://github.com/Vincenius/separator-generator' target="_blank" rel="noopener noreferrer">
                    <GitHub />
                </a>
            </S.Header>
            <S.Container>
                <S.Top className={cn(active, reversedClass)} options={options}>
                    <Controls
                        options={options}
                        setOptions={setOptions}
                    />

                    { active === SEPARATORS.SKEWED &&
                        <S.SkewBg
                            className={reversedClass}
                            angle={options.angle.value}>
                        </S.SkewBg>
                    }
                    { active === SEPARATORS.WAVE &&
                        <S.Wave className={reversedClass}></S.Wave>
                    }
                </S.Top>
                <S.Bottom>
                    <S.Row>
                        { Object.entries(SEPARATORS).map(([key, val]) =>
                            <Card key={`${val}-card`} onClick={() => { useSeparator(val) }}>
                                <img src={`/${val}.png`} alt={`${val} preview`} />
                            </Card>
                        )}
                    </S.Row>
                </S.Bottom>
            </S.Container>
        </React.Fragment>
    )
}

export default Generator
