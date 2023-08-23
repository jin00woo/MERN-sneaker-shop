import { Link, useNavigate } from "react-router-dom";
import React from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return <div>Cart</div>;
};

export default CartScreen;
