import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './SelectComponent.scss';

const SelectComponent = (props) => {
    const [count, setCount] = useState(0);

    return (
        <section className='component__select-container'>

            <header className={'component__select-header'}>
                <div className={'component__select-search'}>
                    <input type="text" placeholder={'Hello world!'}/>
                </div>
                <div className={'component__select-filter'}>
                    <span>A-Z</span>
                    <span>Z-A</span>
                </div>
            </header>

            <main className={'component__select-content'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias cupiditate dignissimos quia voluptatem! Eius laborum quaerat repellat repellendus unde!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis commodi culpa, dolor
                ducimus ea eos est exercitationem in iusto libero magnam maiores nemo officia quis quo repellendus,
                sapiente soluta unde, voluptatem. A animi autem, consectetur corporis delectus deserunt dolore iure
                mollitia odio, quibusdam quos recusandae voluptatum! Delectus doloremque fuga harum libero magni maiores
                non, nulla omnis. A ab accusantium adipisci amet aperiam asperiores culpa earum expedita explicabo ipsam
                numquam omnis pariatur quis rerum, similique tempore velit voluptatem voluptatum. Animi, asperiores
                dolor doloremque facilis fuga impedit iure magnam molestias numquam qui quia quod repellat repellendus
                soluta tenetur. Aperiam dolorum, pariatur?

                {/*<p />*/}
            </main>

            <footer className={'component__select-footer'}>
                <p><span>Selected: 12</span></p>
                <p><span>All: 382</span></p>
            </footer>

        </section>
    );
};

export default SelectComponent;