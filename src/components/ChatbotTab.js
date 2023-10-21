import HideLeft from '../img/HideLeft.svg'
import InputArrow from '../img/input_arrow.png'

const ChatbotTab = (props) => {
    return (
        <div className={`${props.visible == false ? 'flex w-full' : 'hidden md:flex w-1/2 md:w-full'} bg-[#181818] min-h-[880px]`}>
            <div className="flex sm:hidden w-[24px]" onClick={() => props.setVisible(!props.visible)}>
                <img className='p-1' src={HideLeft} />
            </div>
            <div className='flex flex-col justify-between px-4 py-8 bg-[#272727] text-white w-auto sm:w-full items-center'>
                <div className='flex flex-col gap-4 w-full'>
                    <div>bridge usdc from arbitrum to eth</div>
                    <div className='px-4 border-l-4 border-l-[#AEB1DD]'>
                        <p className=''>Bridging USDC from Arbitrum to Ethereum for the user with address 0x28f58b689Ed...
                            <br /><br />
                            http://localhost:5000/bridge
                        </p>
                        <ul className='pl-6' style={{ listStyleType: 'disc' }}>
                            <li className='break-words'>accountAddress: 0x28129f5B8b689EdcB7581654266976aD77C719B</li>
                            <li>sourceChainName: Arbitrum</li>
                            <li>destinationChainName: Ethereum</li>
                            <li>sourceToken: USDC</li>
                            <li>sourceAmount: TBD</li>
                        </ul>
                    </div>
                    <div className='pt-4'>Trade 10000 USDC for $RLB when price reaches 10 cents</div>
                    <div className='px-4 border-l-4 border-l-[#AEB1DD]'>
                        <p className=''>Bridging USDC from Arbitrum to Ethereum for the user with address 0x28f58b689Ed...
                            <br /><br />
                            http://localhost:5000/bridge
                        </p>
                        <ul className='pl-6' style={{ listStyleType: 'disc' }}>
                            <li className='break-words'>accountAddress: 0x28129f5B8b689EdcB7581654266976aD77C719B</li>
                            <li>sourceChainName: Arbitrum</li>
                            <li>destinationChainName: Ethereum</li>
                            <li>sourceToken: USDC</li>
                            <li>sourceAmount: TBD</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full relative px-12'>
                    <input className='w-full bg-[#696969] p-2 border-l-4 border-l-[#AEB1DD] rounded-md' placeholder='Type an operation' />
                    <img className='absolute top-3 right-14' src={InputArrow} />
                </div>
            </div>
        </div>
    )
}

export default ChatbotTab