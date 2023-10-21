import Logo1 from '../img/Logo1.svg'
import Logo2 from '../img/Logo2.svg'
import Logo3 from '../img/Logo3.svg'
import Logo4 from '../img/Logo4.svg'
import LeftArrow from '../img/LeftArrow.svg'
import Account from '../img/Account.svg'
import Account1 from '../img/Account1.svg'

const ConnectWalletTab = (props) => {
    return (
        <>
            {
                <div className={`${props.visible == true ? 'flex py-8 px-4 bg-[#181818] w-full h-full min-h-[880px]' : 'hidden md:flex py-8 px-4 bg-[#181818] h-full min-h-[880px]'}`}>
                    <div className="flex flex-col justify-between w-[50px]">
                        <div className='flex flex-col gap-6'>
                            <img className='pb-8' src={Logo1} />
                            <img src={Logo2} />
                            <img src={Logo3} />
                            <img src={Logo4} />
                        </div>
                        <img src={Account} />
                    </div>
                    <div className='flex flex-col gap-7 px-8 text-white w-full sm:w-full md:w-[300px] lg:w-[360px]'>
                        <div className='flex justify-between'>
                            <div>Account</div>
                            <img className='flex md:hidden' src={LeftArrow} onClick={() => props.setVisible(!props.visible)} />
                        </div>
                        <p className='text-gray-400'>Wallets</p>
                        <div className='flex justify-between'>
                            <div>State</div>
                            <div>0xABCDEF</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>External</div>
                            <div>...</div>
                        </div>
                        <p className='text-gray-400'>Actions</p>
                        <p>CONNECT WALLET</p>
                    </div>
                </div>
            }
            {props.visible == false &&
                <div className="hidden sm:flex md:hidden flex-col justify-between w-[50px] py-8 bg-[#181818]">
                    <div className='flex flex-col gap-6'>
                        <img className='pb-8' src={Logo1} onClick={() => props.setVisible(!props.visible)} />
                        <img src={Logo2} />
                        <img src={Logo3} />
                        <img src={Logo4} />
                    </div>
                    <img src={Account1} />
                </div>
            }
        </>
    )
}

export default ConnectWalletTab