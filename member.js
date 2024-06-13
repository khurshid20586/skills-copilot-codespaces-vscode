function skillsMember() {
    function fetchUserInfo() {
        // Fetch user name and address here
        // You can use any method to fetch the data, such as an API call or reading from a database
        const userName = "John Doe";
        const userAddress = "123 Main Street";
        
        return { name: userName, address: userAddress };
    }

    const userInfo = fetchUserInfo();
    console.log(userInfo.name); // Output: John Doe
    console.log(userInfo.address); // Output: 123 Main Street
}