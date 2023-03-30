import React from 'react'

const AnswerSection = ({ storedValues }) => {
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <>
            <hr className="hr-line" />
            {/* <div className="answer-section">
						<p className="question">{question}</p>
						<p className="answer">{answer}</p>
						<div className="copy-icon">
							<i className="fa-solid fa-copy"></i>
						</div>
					</div> */}
            <div className="answer-container">
                {storedValues.map((value, index) => {
                    return (
                        <div className="answer-section" key={index}>
                            <p className="question"> <i className="iconfont icon-yonghu"></i> {value.question}</p>
                            <p className="answer"><i className="iconfont icon-openai"></i> {value.answer}</p>
                            <div
                                className="copy-icon"
                                onClick={() => copyText(value.answer)}
                            >
                                <i className="fa-solid fa-copy"></i>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default AnswerSection