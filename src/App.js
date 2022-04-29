import './App.css';

function App() {
    return (
        <div className="App">
            <div>
                <ul className="side-bar">
                    <li className="current-page">Home</li>
                    <li>Services</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <div style={{ padding: '0 129px' }}>
                    <img
                        src="https://drive.google.com/file/d/1YFE8hM1EYISt-5IVAoEVvmJif41YcMAM/view?usp=sharing"
                        alt=""
                        style={{
                            width: '310px',
                            height: '122px',
                            margin: '0 auto',
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#EFEFEF',
                            padding: '38px 269px',
                        }}
                    >
                        <p
                            style={{
                                fontWeight: 'bold',
                                paddingBottom: '20px',
                            }}
                        >
                            Lorem ipsum dolor sit asmet?
                        </p>
                        <p style={{ textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed tristique consequat placerat. Vestibulum
                            auctor pellentesque sem, eu posuere erat hendrerit
                            quis. Maecenas vel consequat turpis. Nam facilisis,
                            ligula in mattis sodales, augue justo tristique
                            nulla, sed lacinia ante eros ut mi. Morbi vitae diam
                            augue. Aliquam vel mauris a nibh auctor commodo.
                            Praesent et nisi eu justo eleifend convallis.
                            Quisque suscipit maximus vestibulum. Phasellus
                            congue mollis orci, sit amet luctus augue tristique
                            eu. Donec vulputate odio neque, sed semper turpis
                            pellentesque a.
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: '20px',
                        }}
                    >
                        <div>
                            <p className="title">Lorem ipsum dolor sit amet</p>
                            <div>
                                <img
                                    src="https://drive.google.com/file/d/1D8n2HehXsr7gR0cgUS7p92ecYTdT1Y5T/view?usp=sharing"
                                    alt=""
                                    style={{
                                        width: '128px',
                                        height: '128px',
                                        float: 'left',
                                        marginRight: '10px',
                                        marginBottom: '5px',
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non dui sodales,
                                    faucibus libero ut, posuere felis. Donec
                                    imperdiet suscipit accumsan. Aenean
                                    consequat condimentum velit ut tempor. Nam
                                    porta massa in metus bibendum congue.
                                    Pellentesque ultrices liquam egestas nunc at
                                    ullamcorper ultricies. Donec feugiat velit
                                    nulla, vel sodales est ullamcorper id.
                                    Aenean consequat condimentum velit ut
                                    tempor. Nam porta massa in metus bibendum
                                    congue. Pellentesque ultrices vestibulum
                                    mattis.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="title">Lorem ipsum dolor sit amet</p>
                            <div>
                                <img
                                    src="https://drive.google.com/file/d/1DoKGpxsqc9xwRMC97qbujbhpbbl2qX3c/view?usp=sharing"
                                    alt=""
                                    style={{
                                        width: '128px',
                                        height: '128px',
                                        float: 'left',
                                        marginRight: '10px',
                                        marginBottom: '5px',
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non dui sodales,
                                    faucibus libero ut, posuere felis. Donec
                                    imperdiet suscipit accumsan. Aenean
                                    consequat condimentum velit ut tempor. Nam
                                    porta massa in metus bibendum congue.
                                    Pellentesque ultrices liquam egestas nunc at
                                    ullamcorper ultricies. Donec feugiat velit
                                    nulla, vel sodales est ullamcorper id.
                                    Aenean consequat condimentum velit ut
                                    tempor. Nam porta massa in metus bibendum
                                    congue. Pellentesque ultrices vestibulum
                                    mattis.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="title">Lorem ipsum dolor sit amet</p>
                            <div>
                                <img
                                    src="https://drive.google.com/file/d/1jTNyoQdkXtfRqOLozC81Ce77hgLj5fUm/view?usp=sharing"
                                    alt=""
                                    style={{
                                        width: '128px',
                                        height: '128px',
                                        float: 'left',
                                        marginRight: '10px',
                                        marginBottom: '5px',
                                    }}
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non dui sodales,
                                    faucibus libero ut, posuere felis. Donec
                                    imperdiet suscipit accumsan. Aenean
                                    consequat condimentum velit ut tempor. Nam
                                    porta massa in metus bibendum congue.
                                    Pellentesque ultrices liquam egestas nunc at
                                    ullamcorper ultricies. Donec feugiat velit
                                    nulla, vel sodales est ullamcorper id.
                                    Aenean consequat condimentum velit ut
                                    tempor. Nam porta massa in metus bibendum
                                    congue. Pellentesque ultrices vestibulum
                                    mattis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p
                    style={{
                        position: 'fixed',
                        bottom: '0',
                        border: '1px solid #DEDEDE',
                        width: '100%',
                        padding: '30px 129px',
                    }}
                >
                    Copyright © 2021
                </p>
            </div>
        </div>
    );
}

export default App;
