import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  padding: ${({ size }) =>
    size === "small"
      ? "0.3rem 0.75rem"
      : size === "medium"
      ? "0.5rem 1.5rem"
      : size === "large"
      ? "0.875rem 2rem"
      : ""};
  margin: 0.2rem 0.7rem 0.2rem 0;
  color: ${({ outline, theme }) =>
    outline === true ? `${theme.primaryColor}` : "white"};
  background-color: ${({ outline, theme }) =>
    outline === true ? "transparent" : `${theme.primaryColor}`};
  border: 1px solid;
  border-color: ${({ theme }) => theme.primaryColor};
  border-radius: 12px;
  font-family: ${props => props.theme.primaryFont};
  font-size: 1rem;
  text-decoration: none;
  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    color: ${({ outline, theme }) =>
      outline === true ? "white" : `${theme.primaryColor}`};
    border-color: ${({ theme }) => theme.primaryColor};
    background-color: ${({ outline, theme }) =>
      outline === true ? `${theme.primaryColor}` : "white"};
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`
export const ButtonLink = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  padding: 0.5rem 1.5rem;
  margin: 0.2rem 0.7rem 0.2rem 0;
  color: ${({ outline, theme }) =>
    outline === "true" ? `${theme.primaryColor}` : "white"};
  background-color: ${({ outline, theme }) =>
    outline === "true" ? "transparent" : `${theme.primaryColor}`};
  border: 1px solid;
  border-color: ${({ theme }) => theme.primaryColor};
  border-radius: 12px;
  font-family: ${props => props.theme.primaryFont};
  font-size: 1rem;
  text-decoration: none;
  &:hover:not(:disabled),
  &:active:not(:disabled),
  &:focus {
    outline: 0;
    color: ${({ outline, theme }) =>
      outline === "true" ? "white" : `${theme.primaryColor}`};
    border-color: ${({ theme }) => theme.primaryColor};
    background-color: ${({ outline, theme }) =>
      outline === "true" ? `${theme.primaryColor}` : "white"};
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
  & > svg {
    margin-bottom: -2px;
  }
`
export const LinkText = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};
  margin: 0.5rem 0;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`

export const Button = ({ outline, size, children, ...props }) => {
  return (
    <Btn outline={outline} size={size} {...props}>
      {children}
    </Btn>
  )
}

Button.propTypes = {
  outline: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  outline: false,
  size: "medium",
  onClick: undefined,
  children: "Button",
}
