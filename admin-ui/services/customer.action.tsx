

const createCustomer = async (customer) => {
   
    const response = await fetch(`/api/customer`, {
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
    });
    return response;
}

const updateCustomer = async (customer) => {
   
    const response = await fetch(`/api/customer/${customer.id}`, {
        credentials: 'include',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
    });
    return response;
}

export {createCustomer, updateCustomer}
