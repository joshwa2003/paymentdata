import React from 'react'

const PaymentForm = ({name,setName,email,setEmail,phone,setPhone,amount,setAmount,onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name:</label>
          <input class="form-control form-control-lg" type="text" placeholder="name" aria-label=".form-control-lg example" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email:</label>
          <input class="form-control form-control-lg" type="email" placeholder="name@example.com" aria-label=".form-control-lg example" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Ph.no:</label>
          <input class="form-control form-control-lg" type="number" placeholder="Phone Number" aria-label=".form-control-lg example" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Amount:</label>
          <input class="form-control form-control-lg" type="number" placeholder="Amount" aria-label=".form-control-lg example" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
  )
}

export default PaymentForm
