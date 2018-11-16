import React from 'react';
import { render, shallow } from 'enzyme';

import VideoBackground from './VideoBackground';

/**
 * Lista com o resumo dos testes abaixo:
 *
 * 01 - Renderizar o componente sem erros
 */

describe('<VideoBackground />', () => {
    const VideoBackgroundProps = {
      video: "https://player.vimeo.com/video/125018656?background=1",
      width: "1024",
      height: "576",
    }

    // 01 - Renderizar o componente sem erros
    test('Should render VideoBackground without errors', () => {
      const wrapperRender = render(<VideoBackground {...VideoBackgroundProps} />);
    })
})
