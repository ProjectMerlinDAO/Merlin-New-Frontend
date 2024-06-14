import React from 'react'

const Categories = ({onChange, errors, categories}) => {
  return (
    <div className='mt-[40px] xl:mt-[30px]'>
            <label className='font-[400] uppercase text-white'>Categories <span className='normal-case'>(Multiple options can be selected)</span></label>
            <div className="flex items-start justify-between mt-[20px] gap-[20px] md:flex-wrap">
                <div className="min-w-[240px] md:w-full">
                    <ul>
                        <li className='mb-[10px]'>
                            <div className="w-full form-control">
                                <label className="justify-start cursor-pointer gap-[10px] label">
                                    <input type="checkbox" className="toggle toggle-accent" onChange={onChange} name='Personal' />
                                    <span className="label-text text-white text-[16px]">Personal Purpose</span> 
                                </label>
                            </div>
                        </li>
                        <li className='mb-[10px]'>
                            <div className="w-full form-control">
                                <label className="justify-start cursor-pointer gap-[10px] label">
                                    <input type="checkbox" className="toggle toggle-accent" onChange={onChange} name="SportsAndArts" />
                                    <span className="label-text text-white text-[16px]">Sports and Arts</span> 
                                </label>
                            </div>
                        </li>
                        <li className='mb-[10px]'>
                            <div className="w-full form-control">
                                <label className="justify-start cursor-pointer gap-[10px] label">
                                    <input type="checkbox" className="toggle toggle-accent" onChange={onChange} name="Social" />
                                    <span className="label-text text-white text-[16px]">Social Responsibilities</span> 
                                </label>
                            </div>
                        </li>
                        <li className='mb-[10px]'>
                            <div className="w-full form-control">
                                <label className="justify-start cursor-pointer gap-[10px] label">
                                    <input type="checkbox" className="toggle toggle-accent" onChange={onChange} name="Innovation"/>
                                    <span className="label-text text-white text-[16px]">Innovation</span> 
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="w-3/5 md:w-full">
                    <div className="py-[20px] px-[25px] rounded-[18px] mt-[10px]" style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.05) 100%)'}}>
                        <p className='mb-[26px]'>You won&#39;t pay extra Raven fees for your first chosen category. </p>
                        <p>
                            <span>For each additional category:</span> <br />
                            If you own a Project Merlin Community NFT, you pay 50 MRLN, if not, 150 MRLN.
                        </p>
                    </div>
                </div>
            </div>
            {categories.length == 0 && errors && Object.keys(errors).length > 0 && errors?.hasOwnProperty("categories") ? <div className="error-message">{errors["categories"]}</div> : null}
        </div>
  )
}

export default Categories