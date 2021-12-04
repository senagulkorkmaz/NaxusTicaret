import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

function simpleMenu() {
  return (
    <div>
      <Menu >
        <Dropdown text="TÜM MARKALAR" pointing className="link item" inverted color="purple" className="containerstyle">
          <Dropdown.Menu>
            <Dropdown.Header>Categories</Dropdown.Header>
            <Dropdown.Item>
              <Dropdown text="Clothing">
                <Dropdown.Menu>
                  <Dropdown.Header>Mens</Dropdown.Header>
                  <Dropdown.Item>Shirts</Dropdown.Item>
                  <Dropdown.Item>Pants</Dropdown.Item>
                  <Dropdown.Item>Jeans</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Womens</Dropdown.Header>
                  <Dropdown.Item>Dresses</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                  <Dropdown.Item>Bags</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>Home Goods</Dropdown.Item>
            <Dropdown.Item>Bedroom</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Order</Dropdown.Header>
            <Dropdown.Item>Status</Dropdown.Item>
            <Dropdown.Item>Cancellations</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  );
}

export default simpleMenu;
